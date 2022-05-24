
import UserChat from "../../models/UserChat";
import { ChatsActionType } from "../actionsType/chatsActionType";

export interface fetchUserChatsLoading {
  type: ChatsActionType.FETCH_USER_CHATS_LOADING;
}

export interface fetchUserChatsSuccess {
  type: ChatsActionType.FETCH_USER_CHATS_SUCCESS;
  payload: UserChat[];
}
export interface fetchUserChatsError {
  type: ChatsActionType.FETCH_USER_CHATS_ERROR;
  payload: string | null;
}

export default interface SetCurrentChatId{
  type:ChatsActionType.SET_CURRENT_CHAT_ID;
  payload:string
}

export type ChatsActions =
  | fetchUserChatsLoading
  | fetchUserChatsSuccess
  | fetchUserChatsError
  | SetCurrentChatId;
