import UserData from "./UserData";
export default interface UserChat {
  _id: string;
  chatName: string;
  users: UserData[];
}
