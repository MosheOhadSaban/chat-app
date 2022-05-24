const crypto = require("crypto");
const { Module } = require("module");
const saltRight = "sdkjfhdskajh";
const saltLeft = "--mnlcfs;@!$ ";

const hashPassword = (password) => {
  const hashPassword = crypto
    .createHash("md5")
    .update(saltLeft + password + saltLeft)
    .digest("hex");

  return hashPassword;
};

module.exports = hashPassword;
