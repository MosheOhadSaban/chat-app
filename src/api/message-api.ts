import axios from "axios";
import { SendMessage } from "../models/Message";


const MESSAGE_URL = "http://localhost:5000/message/";

export const asyncAddNewMessage = (message: SendMessage): Promise<any> =>
  axios.post(MESSAGE_URL, message);

export const asyncFetchAllChatMessages = (chatId: string): Promise<any> =>
  axios.get(MESSAGE_URL + `${chatId}`);
