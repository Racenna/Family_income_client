import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../AuthPage/AuthContext";

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = event => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right">
          <li>
            <NavLink to="/" onClick={logoutHandler}>
              Выйти
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
