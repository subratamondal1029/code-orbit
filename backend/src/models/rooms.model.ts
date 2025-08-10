import mongoose, { Schema, model } from 'mongoose';

const roomSchema = new Schema(
  {
    language: {
      type: String,
      required: true,
    },
    participants: [
      {
        isMuted: { type: Boolean, default: false },
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      },
    ],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    AiChats: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    code: [{ type: Schema.Types.ObjectId, ref: 'Code' }],
  },
  { timestamps: true }
);

const Room = model('Room', roomSchema);

export default Room;
