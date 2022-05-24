const jwt = require("jsonwebtoken");
const config = require("../config/config.json");

const generateToken = (name, email, _id) => {
  return jwt.sign(
    {
      name: name,
      email: email,
      _id: _id,
    },
    config.secret
  );
};

module.exports = generateToken;
