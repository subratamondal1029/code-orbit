import { model, Schema } from 'mongoose';

const aiBotSchema = new Schema(
  {
    name: { type: String, required: true },
    model: { type: String, required: true },
    provider: { type: String, required: true },
    settings: {
      temperature: { type: Number, required: true },
      maxTokens: { type: Number, required: true },
    },
    avatar: { type: String }, // avatar url
  },
  { timestamps: true }
);

const AiBot = model('AiBot', aiBotSchema);

export default AiBot;
