import { ChatsActions } from "../actions/chatsActions";
import { ChatsActionType } from "../actionsType/chatsActionType";
import initChatsState from "../initState/initChatsState";

import ChatsState from "./../../models/ChatsState";

const chatsReducer = (
  state: ChatsState = initChatsState,
  action: ChatsActions
): ChatsState => {
  switch (action.type) {
    case ChatsActionType.FETCH_USER_CHATS_LOADING:
      return { ...state, isLoading: true };
    case ChatsActionType.FETCH_USER_CHATS_SUCCESS:
      state.userChats = action.payload;
      return { ...state, isLoading: false, ...state.userChats };
    case ChatsActionType.FETCH_USER_CHATS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case ChatsActionType.SET_CURRENT_CHAT_ID:
      return { ...state, selectedChatId: action.payload };
    default:
      return state;
  }
};

export default chatsReducer;
