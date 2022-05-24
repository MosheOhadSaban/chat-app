const chatDal = require("../dal/chatDal");

const fetchUserChats = async (USER_ID) => {
  const userChats = await chatDal.fetchUserChats(USER_ID);
  return userChats;
};

const createGroupChat = async (groupChatName, chatUsers) => {
  if (!groupChatName || groupChatName === "") {
    throw new Error("A chat name must be provided");
  }
  if (!chatUsers || chatUsers.length <= 2) {
    throw new Error("Two chat users at least must be provided");
  }


  chatUsers = JSON.parse(chatUsers);


  const groupChat = await chatDal.createGroupChat(groupChatName, chatUsers);
  return groupChat;
};

module.exports = {
  fetchUserChats,
  createGroupChat,
};
