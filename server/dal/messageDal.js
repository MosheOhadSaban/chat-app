const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");
const User = require("../models/userModel");

const addMessage = async (newMessage) => {
  try {
    let message = await Message.create({
      sender: newMessage.senderId,
      chat: newMessage.chatId,
      content: newMessage.content,
    });
    message = await message.populate("sender", "name picture");
    message = await User.populate(message, {
      path: "chat.users",
      select: "name picture email",
    });
    await Chat.findByIdAndUpdate(newMessage.chatId, {
      latestMessage: message,
    });
    return message;
  } catch (error) {
    console.log(error.message);
    throw new Error("General Error has occurred");
  }
};

const fetchAllChatMessages = async (chatId) => {
  try {
    const messages = await Message.find({ chat: chatId }).populate(
      "sender",
      "name picture"
    );
    return messages;
  } catch (error) {
    console.log(error.message);
    throw new Error("General Error has occurred");
  }
};

// const updateMessagesAsSeenByUser = async (chatId, userId) => {
//   try {
//     await Message.updateMany(
//       { chat: chatId, isMessageSeen: false },
//       { $addToSet: { seenByUsers: userId } }
//     );
//   } catch (error) {
//     console.log(error.message);
//     throw new Error("General Error has occurred");
//   }
// };

// const getAllseenMassagesIds = async (chatId) => {
//   try {
//     await Message.updateMany({ chat: chatId }, { isMessageSeen: true });
//     return await Message.find({ chatId: chatId }).select("_id");
//   } catch (error) {
//     console.log(error.message);
//     throw new Error("General Error has occurred");
//   }
// };

module.exports = {
  addMessage,
  fetchAllChatMessages,
  // updateMessagesAsSeenByUser,
  // getAllseenMassagesIds,
};
