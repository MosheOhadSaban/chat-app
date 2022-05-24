const io = require("socket.io");
const userDal = require("../dal/userDal");
const messageDal = require("../dal/messageDal");
const chatDal = require("../dal/chatDal");

const socketServer = (httpServer) => {
  const options = {
    cors: {
      origin: ["http://localhost:3000"],
    },
  };

  io(httpServer, options).on("connection", (socket) => {
  
    const userId = socket.handshake.query.userId;
    // setUserConnectionStatus(userId);
 

    console.log("User number " + userId + " is connected");

    socket.on("disconnect", () => {
      console.log("User " + socket.id + " is disconnected");
    });

    socket.on("send-message", (message, chatId) => {
      socket.to(chatId).emit("receive-message", message);
    });

    socket.on("join-room", (chatId, userId) => {
      socket.join(chatId, userId);
      // setUserCurrentChatRoom(chatId, userId);
      // updateMessagesAsSeenByUser(chatId, userId);
      // if (isAllRoomUsersConnected(chatId)) {
      //   const seenMessagesIds =getAllseenMassagesIds(chatId);
      //   console.log(seenMessagesIds)
      // }

      console.log("User", "join room :", chatId);
    });
    socket.on("leave-room", (chatId) => {
      socket.leave(chatId);
      console.log("User,leave room :", chatId);
    });
  });
};

// const setUserConnectionStatus = async (userId) => {
//   currentUserStatus = await userDal.setUserConnectionStatus(userId);
// };

// const setUserCurrentChatRoom = async (chatId, userId) => {
//   currentUserStatus = await userDal.setUserCurrentChatRoom(chatId, userId);
// };

// const updateMessagesAsSeenByUser = async (chatId, userId) => {
//   await messageDal.updateMessagesAsSeenByUser(chatId, userId);
// };

// const isAllRoomUsersConnected = async (chatId) => {
//   const AllConnectedUsersCount = await userDal.getAllConnectedRoomUsersCount(
//     chatId
//   );
//   const roomUsersCount = await chatDal.getAllRoomUsersCount(chatId);
//   if (AllConnectedUsersCount === roomUsersCount) return true;

//   return false;
// };


// const getAllseenMassagesIds = async (chatId) => {
//   const { seenMessages } = await messageDal.getAllseenMassagesIds(chatId);
//   return seenMessages;
// };

module.exports = {
  socketServer,
};
