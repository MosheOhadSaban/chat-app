import axios from "axios";
import RegisterInfo from "../models/RegisterInfo";

import LoginInfo from "./../models/LoginInfo";

const USER_REGISTER_URL = "http://localhost:5000/user";
const USER_LOGIN_URL = "http://localhost:5000/user/auth";

export const asyncRegister = (registerInfo: RegisterInfo): Promise<any> =>
  axios.post(USER_REGISTER_URL, registerInfo);

export const asyncLogin = (loginInfo: LoginInfo): Promise<any> =>
  axios.post(USER_LOGIN_URL, loginInfo);
