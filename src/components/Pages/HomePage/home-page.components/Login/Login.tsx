import React, { ChangeEvent, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginInfo from "../../../../../models/LoginInfo";
import { setAuthUserData } from "../../../../../redux/actionCreators/userActionCreators";
import { useDispatch } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    interfaceName: "LoginInfo",
    email: "",
    password: "",
  });

  return (
    <div className="box has-background-info-light">
      <div className="level">
        <div className="level-item">
          <span className="icon-text">
            <span className="icon">
              <i className="fa-solid fa-user fas fa-2x"></i>
            </span>
            <span>
              <h2 className="is-size-1">Login</h2>
            </span>
          </span>
        </div>
      </div>
      <hr className="has-background-grey-light"></hr>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="email"
            placeholder="Email"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setLoginInfo({ ...loginInfo, email: e.target.value });
            }}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setLoginInfo({ ...loginInfo, password: e.target.value });
            }}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <button
        className="button is-primary is-fullwidth"
        onClick={() => {
          dispatch<any>(setAuthUserData(loginInfo));
          navigate("chat");
        }}
      >
        Login
      </button>

      {/* <div className="block mt-5">
        Need an account?{" "}
        <strong>
          <Link to="register">Register</Link>
        </strong>
      </div> */}
    </div>
  );
}

export default Login;
