import { combineReducers } from "redux";
import chatsReducer from "./chatsReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
  chats:chatsReducer,
  message:messageReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
