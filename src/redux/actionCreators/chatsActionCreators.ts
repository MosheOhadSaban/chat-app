import { Dispatch } from "react";
import { asyncFetchUserChats } from "../../api/chats-api";
import { ChatsActions } from "../actions/chatsActions";
import { ChatsActionType } from "../actionsType/chatsActionType";
import ChatsState from "./../../models/ChatsState";

export const fetchUserChats = (USER_ID: string) => {
  return async (dispatch: Dispatch<ChatsActions>) => {
    dispatch({
      type: ChatsActionType.FETCH_USER_CHATS_LOADING,
    });

    try {
      const { data } = await asyncFetchUserChats(USER_ID);
      dispatch({
        type: ChatsActionType.FETCH_USER_CHATS_SUCCESS,
        payload: data,
      });
    } catch (error:any) {
      dispatch({
        type: ChatsActionType.FETCH_USER_CHATS_ERROR,
        payload: error.message,
      });
      console.log(error.message);
      // alert(error.response.data.error);
    }
  };
};

export const setCurrentChatId = (chatId: string): ChatsActions => {
  const action: ChatsActions = {
    type: ChatsActionType.SET_CURRENT_CHAT_ID,
    payload: chatId,
  };
  return action;
};
