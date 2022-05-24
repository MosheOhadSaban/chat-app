import { Dispatch } from "redux";
import { asyncFetchAllChatMessages } from "../../api/message-api";
import { IncomingMessage, SendMessage } from "../../models/Message";
import socketIoService from "../../services/socket-io-service";
import { MessageActions } from "../actions/messageActions";
import { MessageActionType } from "../actionsType/messageActionType";
import { asyncAddNewMessage } from "./../../api/message-api";

export const fetchAllChatMessages = (chatId: string) => {
  return async (dispatch: Dispatch<MessageActions>) => {
    dispatch({
      type: MessageActionType.FETCH_ALL_CHAT_MESSAGES_LOADING,
    });
    try {
      const { data } = await asyncFetchAllChatMessages(chatId);
      dispatch({
        type: MessageActionType.FETCH_ALL_CHAT_MESSAGES_SUCCESS,
        payload: data,
      });
    } catch (error:any) {
      dispatch({
        type: MessageActionType.FETCH_ALL_CHAT_MESSAGES_ERROR,
        payload: error.message,
      });
      console.log(error.message);

      alert(error.response.data.error);
    }
  };
};

export const AddNewMessage = (message: SendMessage) => {
  return async (dispatch: Dispatch<MessageActions>) => {
    dispatch({
      type: MessageActionType.ADD_NEW_MESSAGE_LOADING,
    });

    try {
      const { data } = await asyncAddNewMessage(message);
      const { chat } = data;
      socketIoService.sendMessage(data, chat);
      dispatch({
        type: MessageActionType.ADD_NEW_MESSAGE_SUCCESS,
        payload: data,
      });
    } catch (error:any) {
      dispatch({
        type: MessageActionType.ADD_NEW_MESSAGE_SUCCESS,
        payload: error.message,
      });
      console.log(error.message);

      alert(error.response.data.error);
    }
  };
};

export const addMessageSocket = (data: IncomingMessage): MessageActions => {
  const action: MessageActions = {
    type: MessageActionType.ADD_NEW_MESSAGE_SUCCESS,
    payload: data,
  };
  return action;
};
