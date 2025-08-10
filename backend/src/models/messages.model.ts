import { model, Schema } from 'mongoose';

const messageSchema = new Schema(
  {
    roomId: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: true,
    },
    senderType: {
      type: String,
      enum: ['User', 'AiBot'],
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      refPath: 'senderType',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    context: String, // range of code (eg. 0-10)
  },
  { timestamps: true }
);

const Message = model('Message', messageSchema);

export default Message;
