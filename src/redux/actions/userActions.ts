import UserData from "../../models/UserData";
import { UserActionType } from "../actionsType/userActionType";
import UserState from './../../models/UserState';

export interface setUserAuthLoadingAction {
  type: UserActionType.SET_AUTH_USER_DATA_LOADING;
}

export interface setUserAuthSuccessAction {
  type: UserActionType.SET_AUTH_USER_DATA_SUCCESS;
  payload: UserData;
}

export interface setUserAuthErrorAction {
  type: UserActionType.SET_AUTH_USER_DATA_ERROR;
  payload: string | null;
}

export interface clearUserData {
  type: UserActionType.CLEAR_USER_DATA;
  payload: UserState;
}

export type UserActions =
  | setUserAuthLoadingAction
  | setUserAuthSuccessAction
  | setUserAuthErrorAction
  | clearUserData;
