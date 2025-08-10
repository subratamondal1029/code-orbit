import { model, Schema } from "mongoose";

const aiBotSchema = new Schema(
  {
    name: { type: String, required: true },
    model: { type: String, required: true },
    provider: { type: String, required: true },
    settings: {
      type: Object,
      default: {},
    }, // additional settings/configuration for the AI bot
    avatar: { type: String }, // avatar url
  },
  { timestamps: true }
);

const AiBot = model("AiBot", aiBotSchema);

export default AiBot;
