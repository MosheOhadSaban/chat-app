import { IncomingMessage } from "../../models/Message";
import { MessageActionType } from "../actionsType/messageActionType";

export interface FetchAllChatMessagesLoadingAction {
  type: MessageActionType.FETCH_ALL_CHAT_MESSAGES_LOADING;
}

export interface FetchAllChatMessagesSuccessAction {
  type: MessageActionType.FETCH_ALL_CHAT_MESSAGES_SUCCESS;
  payload: IncomingMessage[];
}

export interface FetchAllChatMessagesErrorAction {
  type: MessageActionType.FETCH_ALL_CHAT_MESSAGES_ERROR;
  payload: string | null;
}

export interface AddNewMessageLoadingAction {
  type: MessageActionType.ADD_NEW_MESSAGE_LOADING;
}
export interface AddNewMessageSuccessAction {
  type: MessageActionType.ADD_NEW_MESSAGE_SUCCESS;
  payload: IncomingMessage 
}
export interface AddNewMessageErrorAction {
  type: MessageActionType.ADD_NEW_MESSAGE_ERROR;
  payload: null | string;
}

export type MessageActions =
  | FetchAllChatMessagesLoadingAction
  | FetchAllChatMessagesSuccessAction
  | FetchAllChatMessagesErrorAction
  | AddNewMessageLoadingAction
  | AddNewMessageSuccessAction
  | AddNewMessageErrorAction;
