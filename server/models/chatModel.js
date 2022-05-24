const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    // trim: Removes whitespace characters, including null, or the specified characters from the beginning and end of a string
    chatName: { type: String, trim: true }, //
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  {
    // representing the creation time
    timetamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
