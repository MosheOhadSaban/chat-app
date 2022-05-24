import { io, Socket } from "socket.io-client";
import { IncomingMessage } from "../models/Message";

const SERVER_URL = "http://localhost:5000";

class SocketIoService {
  private socket: Socket;

  public connect(gotMessgae: Function, userId: string): void {
    this.socket = io(SERVER_URL, {
      query: {
        userId: userId,
      },
    });

    this.socket.on("receive-message", (message: IncomingMessage) =>
      gotMessgae(message)
    );
  }

  // public onMessagesSeen(gotSeenMessagesIds: Function): void {
  //   this.socket.on("on-messages-seen", (seenMessagesIds: Array<string>) =>
  //     gotSeenMessagesIds(seenMessagesIds)
  //   );
  // }

  public sendMessage(message: IncomingMessage, chatId: string): void {
    this.socket.emit("send-message", message, chatId);
  }

  public joinRoom(chatId: string, userId: string): void {
    this.socket.emit("join-room", chatId, userId);
  }
  public leaveRoom(chatId: string): void {
    this.socket.emit("leave-room", chatId);
  }
}

const socketIoService = new SocketIoService();

export default socketIoService;
