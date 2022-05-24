import React from "react";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import UserData from "../../../../../models/UserData";
import { useDispatch } from "react-redux";
import initUserState from "../../../../../redux/initState/initUserState";
import { clearUserData } from "../../../../../redux/actionCreators/userActionCreators";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const userData: UserData = useTypedSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav
      className="navbar has-background-info-light has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-item">
        <span className="icon-text">
          <span className="icon">
            <i className="fa-solid fa-envelope fas fa-2x mr-2"></i>
          </span>
          <h1 className="is-size-3">Chat App</h1>
        </span>
      </div>
      <div className="navbar-item ">
        <h3>Hello {`${userData.name}`}</h3>
      </div>

      <div className="navbar-item">
        <button
          className="button is-primary is-outlined"
          onClick={() => {
            dispatch(clearUserData(initUserState));
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
