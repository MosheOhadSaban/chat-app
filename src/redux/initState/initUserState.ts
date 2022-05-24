import UserState from "./../../models/UserState";
import UserData from "../../models/UserData";

 const initUserState: UserState = {
  isLoading: false,
  isUserLoging: false,
  error: null,
  data: {
    _id: "",
    name: "",
    email: "",
    picture: "",
    token: "",
  },
};

export default initUserState