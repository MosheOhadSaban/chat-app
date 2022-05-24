import UserData from "./UserData";
export default interface UserState {
  isLoading: boolean;
  isUserLoging:boolean
  error: string | null;
  data: UserData;
}
