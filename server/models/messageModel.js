const mongoose = require("mongoose");

const messageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // trim: Removes whitespace characters, including null, or the specified characters from the beginning and end of a string
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    isMessageSeen: { type: Boolean, default: false },
    seenByUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // representing the creation time
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageModel);

module.exports = Message;
