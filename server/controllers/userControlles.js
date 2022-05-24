const userService = require("../services/userSevice");

const registerUser = async (request, response) => {
  const registerInfo = request.body;
  try {
    const userData = await userService.registerUser(registerInfo);
    response
      .status(201)
      .json({ message: "Successfully registered", userInfo: userData });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

const authUser = async (request, response) => {
  const authUserInfo = request.body;
  try {
    const userData = await userService.authUser(authUserInfo);
    response
      .status(201)
      .json({ message: "Successfully login", userInfo: userData });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  authUser,
};
