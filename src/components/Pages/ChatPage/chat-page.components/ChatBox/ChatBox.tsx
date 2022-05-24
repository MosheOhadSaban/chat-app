import React, { useEffect, useRef, useState } from "react";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { IncomingMessage } from "../../../../../models/Message";
import MessageBlock from "../MessageBlock/MessageBlock";
import { useDispatch } from "react-redux";
import { AddNewMessage } from "../../../../../redux/actionCreators/messageActionCreators";

function ChatBox() {
  const dispatch = useDispatch();
  const messages: IncomingMessage[] = useTypedSelector(
    (state) => state.message.data
  );
  const senderId: string = useTypedSelector((state) => state.user.data._id);

  const selectedChatId: string = useTypedSelector(
    (state) => state.chats.selectedChatId
  );

  const [messageValue, setMessageValue] = useState("");
  const changeHandler = (event: any) => {
    setMessageValue(event.target.value);
  };

  const fireMessageHandler = (event: any) => {
    if (event.key === "Enter") {
      dispatch<any>(
        AddNewMessage({
          senderId: senderId,
          content: messageValue,
          chatId: selectedChatId,
        })
      );

      setMessageValue("");
    }
  };

  return (
    <div className="box has-background-info-light">
      <div className="box  has-background-info">
        <div className="level">
          <div className="level-item">
            <h2 className="is-size-2 has-text-white-bis">Chat Box:</h2>
          </div>
        </div>
      </div>
      <div className="box">
        {messages.map((message, index) => (
          <MessageBlock
            key={index}
            _id={message._id}
            content={message.content}
            isMessageSeen={message.isMessageSeen}
            sender={message.sender}
            chatId={message.chatId}
          />
        ))}
      </div>

      <input
        className="input"
        placeholder="Send a message"
        onChange={changeHandler}
        onKeyDown={fireMessageHandler}
        value={messageValue}
      ></input>
    </div>
  );
}

export default ChatBox;
