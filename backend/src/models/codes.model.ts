import { model, Schema } from 'mongoose';
import { SUPPORTED_lANGUAGES } from '../constants.js';

const codeSchema = new Schema(
  {
    language: {
      type: String,
      required: true,
      enum: SUPPORTED_lANGUAGES,
    },
    code: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Code = model('Code', codeSchema);
