import MessageState from "../../models/MessageState";
import { MessageActions } from "../actions/messageActions";
import { MessageActionType } from "../actionsType/messageActionType";
import initMessageState from "../initState/initIncomingMessage";

const messageReducer = (
  state: MessageState = initMessageState,
  action: MessageActions
): MessageState => {
  switch (action.type) {
    case MessageActionType.FETCH_ALL_CHAT_MESSAGES_LOADING:
      return { ...state, isLoading: true };
    case MessageActionType.FETCH_ALL_CHAT_MESSAGES_SUCCESS:
      state.data = action.payload;
      return { ...state, ...state.data, isLoading: false };
    case MessageActionType.FETCH_ALL_CHAT_MESSAGES_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case MessageActionType.ADD_NEW_MESSAGE_LOADING:
      return { ...state, isLoading: true };
    case MessageActionType.ADD_NEW_MESSAGE_SUCCESS:
      state.data.push(action.payload);
      return { ...state, data: [...state.data],isLoading:false };
    case MessageActionType.ADD_NEW_MESSAGE_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default messageReducer;
