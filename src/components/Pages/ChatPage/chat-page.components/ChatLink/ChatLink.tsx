import React from "react";
import UserChat from "../../../../../models/UserChat";
import "./ChatLink.css";
import { useDispatch } from "react-redux";
import { fetchAllChatMessages } from "../../../../../redux/actionCreators/messageActionCreators";
import { setCurrentChatId } from "../../../../../redux/actionCreators/chatsActionCreators";
import socketIoService from "../../../../../services/socket-io-service";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";

function ChatLink(props: UserChat) {
  const dispatch = useDispatch();
  const selectedChatId: string = useTypedSelector(
    (state) => state.chats.selectedChatId
  );
  const userId:string = useTypedSelector(
    (state) => state.user.data._id
  );

  return (
    <div
      className=" box UserChat"
      onClick={() => {
        dispatch<any>(fetchAllChatMessages(props._id));
        socketIoService.leaveRoom(selectedChatId)
        dispatch(setCurrentChatId(props._id));
        socketIoService.joinRoom(props._id,userId)
      }}
    >
      <h3 className="title is-3 chat-link">{props.chatName}</h3>
    </div>
  );
}

export default ChatLink;
