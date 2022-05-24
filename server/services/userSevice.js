const userDal = require("../dal/userDal");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const hashPassword = require("../utils/hashPassword");
const isPasswordMatch = require("../utils/isPasswordMatch");

const registerUser = async (registerInfo) => {
  if (!registerInfo.name || !registerInfo.email || !registerInfo.password) {
    throw new Error("Please enter all the feilds");
  }
  registerInfo.password = hashPassword(registerInfo.password);

  const alreadyExistUser = await userDal.getExistUser(registerInfo);
  if (alreadyExistUser) {
    throw new Error("User already exist");
  }

  const userInfo = await User.create(registerInfo);
  if (!userInfo) {
    throw new Error("Failed to Create the user");
  } else {
    const userData = {
      _id: userInfo._id,
      name: userInfo.name,
      email: userInfo.email,
      picture: userInfo.picture,
      token: generateToken(userInfo.name, userInfo.email, userInfo._id),
    };
    return userData;
  }
};

const authUser = async (authUserInfo) => {
  authUserInfo.password = hashPassword(authUserInfo.password);

  const user = await userDal.getExistUser(authUserInfo);
  if (user) {
    if (isPasswordMatch(authUserInfo.password, user.password)) {
      const userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        picture: user.picture,
        token: generateToken(user.name, user.email, user._id),
      };
      return userData;
    }
    else {
        throw new Error ("Password is not valid")
    }
  }
  else{
      throw new Error ("Email does not exist")
  }
};

module.exports = {
  registerUser,
  authUser,
};
