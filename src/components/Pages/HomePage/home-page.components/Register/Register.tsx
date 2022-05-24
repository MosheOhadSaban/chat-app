import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import RegisterInfo from "../../../../../models/RegisterInfo";
import { setAuthUserData } from "../../../../../redux/actionCreators/userActionCreators";
import { useDispatch } from "react-redux";

function Register() {
  const count = useRef(0);
  const isUserLogin: boolean = useTypedSelector(
    (state) => state.user.isUserLoging
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({
    interfaceName: "RegisterInfo",
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isUserLogin && count.current === 1) {
      navigate("chat");
    }
    count.current = count.current + 1;
  }, [isUserLogin]);

  return (
    <div className="box has-background-info-light">
      <div className="level">
        <div className="level-item">
          <span className="icon-text">
            <span className="icon">
              <i className="fa-solid fa-user-plus fas fa-2x mr-1"></i>
            </span>
            <span>
              <h2 className="is-size-1">Register</h2>
            </span>
          </span>
        </div>
      </div>
      <hr className="has-background-grey-light"></hr>
      <div className="field">
        <label className="label">Name :</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Name"
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setRegisterInfo({ ...registerInfo, name: event.target.value });
            }}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Email :</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="Email"
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setRegisterInfo({ ...registerInfo, email: event.target.value });
            }}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password :</label>
        <div className="control">
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setRegisterInfo({
                ...registerInfo,
                password: event.target.value,
              });
            }}
          />
        </div>
      </div>

      <button
        className="button is-primary is-fullwidth"
        onClick={() => dispatch<any>(setAuthUserData(registerInfo))}
      >
        Register
      </button>

      <div className="block mt-5">
        Already have an account?
        <strong>
          <Link to="/"> Login</Link>
        </strong>
        .
      </div>
    </div>
  );
}

export default Register;
function loginInfo(loginInfo: any): any {
  throw new Error("Function not implemented.");
}
