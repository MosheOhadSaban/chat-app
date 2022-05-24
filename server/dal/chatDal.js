const Chat = require("../models/chatModel");
const User = require("../models/userModel");

const fetchUserChats = async (USER_ID) => {
  let userChats = await Chat.find({
    users: { $elemMatch: { $eq: USER_ID } },
    // populate(),  lets you reference documents in other collections.
  })
    .populate("users", "-password")
    .populate("latestMessage")
    .sort({ updateAt: -1 });
  userChats = await User.populate(userChats, {
    path: "latestMessage.sender",
    select: "name picture email",
  });

  return userChats;
};

const createGroupChat = async (groupChatName, chatUsers) => {
  chatGroup = await Chat.create({
    chatName: groupChatName,
    users: chatUsers,
  });
};

// const getAllRoomUsersCount = async (chatId) => {
//   const { users } = await Chat.findOne({ _id: chatId }).select("users");
//   const roomUsersCount = users.length;
//   return roomUsersCount

// };

module.exports = {
  fetchUserChats,
  createGroupChat,
  // getAllRoomUsersCount,
};
