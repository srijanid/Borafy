import mongoose, { Schema, type Document } from "mongoose";

export interface IMessage extends Document {
    chat: mongoose.Types.ObjectId;
    sender: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>({
    chat: { 
        type: Schema.Types.ObjectId, 
        ref: "Chat",
        required: true 
    },
    sender: { 
        type: Schema.Types.ObjectId, 
        ref: "User",
        required: true 
    },
    content: { 
        type: String, 
        required: true,
        trim: true 
    },
}, {
    timestamps: true
   }
);

MessageSchema.index({ chat: 1, createdAt: 1 }); // Index for efficient retrieval of messages in a chat sorted by creation time
// 1 for ascending order, -1 for descending order

export const Message = mongoose.model("Message", MessageSchema);