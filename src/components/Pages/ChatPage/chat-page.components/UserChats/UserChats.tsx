import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import UserChat from "./../../../../../models/UserChat";
import ChatLink from "./../ChatLink/ChatLink";
import ChatsState from "./../../../../../models/ChatsState";

function UserChats() {
  const chatsState: ChatsState = useTypedSelector((state) => state.chats);
  const userChats: UserChat[] = Object.values(chatsState.userChats);


  return (
    <div className="box has-background-info-light">
      <div className="box  has-background-info">
        <h2 className="is-size-2 has-text-white-bis">Chats List:</h2>
      </div>
      {userChats.map((chat, index) => (
        <ChatLink
          key={index}
          _id={chat._id}
          chatName={chat.chatName}
          users={chat.users}
        ></ChatLink>
      ))}
    </div>
  );
}

export default UserChats;
