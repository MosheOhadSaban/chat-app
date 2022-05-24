import { UserActions } from "../actions/userActions";
import { UserActionType } from "../actionsType/userActionType";
import initUserState from "../initState/initUserState";
import UserState from "./../../models/UserState";

const userReducer = (
  state: UserState = initUserState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case UserActionType.SET_AUTH_USER_DATA_LOADING:
      return { ...state, isLoading: true };
    case UserActionType.SET_AUTH_USER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isUserLoging: true,
        data: action.payload,
      };
    case UserActionType.SET_AUTH_USER_DATA_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case UserActionType.CLEAR_USER_DATA:
      state = action.payload;
      return { ...state };

    default:
      return state;
  }
};

export default userReducer;
