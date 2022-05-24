const isPasswordMatch = (clientPassword, dbPasswod) => {
  if (clientPassword === dbPasswod) return true;

  return false;
};


module.exports = isPasswordMatch