const messageService = require("../services/messageService");

const addMessage = async (request, response) => {
  const { content, chatId, senderId } = request.body;
  const newMessage = {
    senderId: senderId,
    content: content,
    chatId: chatId,
  };
  try {
    const message = await messageService.addMessage(newMessage);
    response.status(201).json(message);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

const fetchAllChatMessages = async (request, response) => {
  const chatId = request.params.chatId;

  try {
    const messages = await messageService.fetchAllChatMessages(chatId);
    response.status(201).json(messages);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

module.exports = {
  addMessage,
  fetchAllChatMessages,
};
