import axios from "axios";

const FETCH_USER_CHATS_URL = "http://localhost:5000/chat";

export const asyncFetchUserChats = (USER_ID: string): Promise<any> =>
  axios.get(FETCH_USER_CHATS_URL + `/${USER_ID}`);
