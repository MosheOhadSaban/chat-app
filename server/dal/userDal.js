const User = require("../models/userModel");
const Message = require("../models/messageModel");

const getExistUser = async (userInfo) => {
  const email = userInfo.email;
  const existUser = await User.findOne({ email });
  return existUser;
};
// const setUserConnectionStatus = async (useId) => {
//   try {
//     currentUserStatus = await User.findByIdAndUpdate(useId, {
//       isUserOnline: true,
//     });
//     return currentUserStatus;
//   } catch (error) {
//     console.log(error.message)
//     throw new Error("General Error has occurred");
//   }
// };

// const setUserCurrentChatRoom = async (chatId, userId) => {
//   try {
//     currentUserStatus = await User.findByIdAndUpdate(userId, {
//       currentChatRoom: chatId,
//     });
//     return currentUserStatus;
//   } catch (error) {
//     console.log(error.message)
//     throw new Error("General Error has occurred");
//   }
// };

// const getAllConnectedRoomUsersCount = async (chatId) =>{
//   return await User.countDocuments({isUserOnline: true,currentChatRoom:chatId})

// }

module.exports = {
  getExistUser,
  // setUserConnectionStatus,
  // setUserCurrentChatRoom,
  // getAllConnectedRoomUsersCount
};
