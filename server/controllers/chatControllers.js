
const chatService = require("../services/chatService");

const fetchUserChats = async (request, response) => {
  const USER_ID = request.params.id;

  try {
    const userChats = await chatService.fetchUserChats(USER_ID);
    response.status(201).json({ userChats: userChats });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

const createGroupChat = async (request, response) => {
  const groupChatName = request.body.name
  const chatUsers = request.body.users
  try {
    const groupChat = await chatService.createGroupChat(groupChatName,chatUsers);
    response
      .status(201)
      .json({ groupChat: groupChat, message: "A new group chat was created" });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

module.exports = {
  fetchUserChats,
  createGroupChat,
};
