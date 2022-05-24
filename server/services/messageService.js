const messageDal = require("../dal/messageDal");
const getIO = require("../services/socketService").getIO

const addMessage = async (newMessage) => {
  if (!newMessage.content || !newMessage.chatId) {
    console.log("Invaild data passed into request");
    throw new Error("General Error has occurred");
  }

  const message = await messageDal.addMessage(newMessage);
  return message;
};

const fetchAllChatMessages = async (chatId) => {
  const messages = await messageDal.fetchAllChatMessages(chatId);
  return messages;
};

module.exports = {
  addMessage,
  fetchAllChatMessages,
};
