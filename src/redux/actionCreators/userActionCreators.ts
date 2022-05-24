import LoginInfo from "./../../models/LoginInfo";
import RegisterInfo from "./../../models/RegisterInfo";
import { Dispatch } from "redux";
import { UserActions } from "../actions/userActions";
import { UserActionType } from "../actionsType/userActionType";
import { asyncLogin, asyncRegister } from "../../api/users-api";
import UserData from "../../models/UserData";
import { setTokenConfig } from "../../utils/tokenConfig";
import UserState from "./../../models/UserState";

export const setAuthUserData = (authInfo: LoginInfo | RegisterInfo) => {
  console.log(authInfo);

  return async (dispatch: Dispatch<UserActions>) => {
    dispatch({
      type: UserActionType.SET_AUTH_USER_DATA_LOADING,
    });
    if (authInfo.interfaceName === "LoginInfo") {
      try {
        const { data } = await asyncLogin(authInfo);
        const userData: UserData = data.userInfo;
        const serverMessage: string = data.message;
        alert(serverMessage);
        if (userData.token) setTokenConfig(userData.token);

        dispatch({
          type: UserActionType.SET_AUTH_USER_DATA_SUCCESS,
          payload: userData,
        });
      } catch (error:any) {
        dispatch({
          type: UserActionType.SET_AUTH_USER_DATA_ERROR,
          payload: error.response.data.error,
        });

        alert(error.response.data.error);
      }
    } else {
      try {
        const { data } = await asyncRegister(authInfo);
        console.log(data);
        const userData: UserData = data.userInfo;
        const serverMessage: string = data.message;
        alert(serverMessage);
        if (userData.token) setTokenConfig(userData.token);
        dispatch({
          type: UserActionType.SET_AUTH_USER_DATA_SUCCESS,
          payload: userData,
        });
      } catch (error:any) {
        dispatch({
          type: UserActionType.SET_AUTH_USER_DATA_ERROR,
          payload: error.response.data.error,
        });

        alert(error.response.data.error);
      }
    }
  };
};

export const clearUserData = (userState: UserState): UserActions => {
  const action: UserActions = {
    type: UserActionType.CLEAR_USER_DATA,
    payload: userState,
  };
  return action;
};
