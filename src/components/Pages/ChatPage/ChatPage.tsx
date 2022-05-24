import React, { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Navbar from "./chat-page.components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { fetchUserChats } from "../../../redux/actionCreators/chatsActionCreators";
import ChatBox from "./chat-page.components/ChatBox/ChatBox";
import UserChats from "./chat-page.components/UserChats/UserChats";
import socketIoService from "../../../services/socket-io-service";
import { IncomingMessage } from "../../../models/Message";
import { addMessageSocket } from "../../../redux/actionCreators/messageActionCreators";

function ChatPage() {
  const dispatch = useDispatch();
  const isUserLogin: boolean = useTypedSelector(
    (state) => state.user.isUserLoging
  );

  const USER_ID: string = useTypedSelector((state) => state.user.data._id);

  const gotMessage = (message: IncomingMessage) => {
    dispatch(addMessageSocket(message));
  };
  // const gotSeenMessagesIds = (seenMessagesIds: Array<string>) => {
  //   console.log(seenMessagesIds);
  // };

  useEffect(() => {
    if (isUserLogin) {
      dispatch<any>(fetchUserChats(USER_ID));
      socketIoService.connect(gotMessage, USER_ID);
      // socketIoService.onMessagesSeen(gotSeenMessagesIds);
    }
  }, [isUserLogin]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="columns mt-3 ">
          <div
            className="column is-4 is-hidden-mobile "
            style={{ height: "100vh" }}
          >
            <UserChats />
          </div>
          <div className="column" style={{ height: "100vh" }}>
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
