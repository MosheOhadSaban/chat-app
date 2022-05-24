import React from "react";
import { IncomingMessage } from "../../../../../models/Message";

function MessageBlock(props: IncomingMessage) {
  return (
    <div className="notification is-primary is-light" >
      <figure className="image image is-24x24" style={{ display: "inline-block"}}>
        <img className="is-rounded" src={props.sender.picture} />
      </figure>
      <div className="ml-2 mt-2" style={{ display: "inline-block"}} >{props.sender.name}</div>
       <div className="content">{props.content}</div>
    </div>
  );
}

export default MessageBlock;
