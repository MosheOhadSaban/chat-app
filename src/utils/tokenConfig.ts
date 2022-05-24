import axios from "axios";

export const setTokenConfig = (token: string): void => {
  token = "Bearer " + token;
  sessionStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = token;
};

export const initTokenConfig = (): void => {
  location.reload();
  sessionStorage.clear();
  delete axios.defaults.headers.common["Authorization"];
};
