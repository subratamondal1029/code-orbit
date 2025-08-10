import mongoose, { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    avatar: {
      type: String, // url
    },
    provider: {
      type: String, // e.g., 'local', 'google', 'github'
      enum: ['local', 'google', 'github'],
      default: 'local',
    },
    password: {
      type: String,
      required: true,
    },
    loggedIn: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified(this.password)) return next();

  const hashed = await bcrypt.hash(this.password, 10);
  this.password = hashed;
  next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const user = model('User', userSchema);

export default user;
