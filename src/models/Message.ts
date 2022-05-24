import Sender from "./Sender";

interface Message {
  content: string;
  chatId: string;
}

export interface IncomingMessage extends Message {
  _id: string;
  isMessageSeen: boolean;
  sender: Sender;
}

export interface SendMessage extends Message {
  senderId: string;
}
