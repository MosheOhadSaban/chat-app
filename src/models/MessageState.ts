import { IncomingMessage } from "./Message";


export default interface MessageState {
  isLoading: boolean;
  error: string | null;
  data: IncomingMessage[];
}
