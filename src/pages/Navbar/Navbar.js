import React, { useContext, useState, useCallback, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../AuthPage/AuthContext";
import { useHttp } from "../../hooks/httpHook";

export const Navbar = () => {
  const history = useHistory();
  const [email, setEmail] = useState("USER");
  const auth = useContext(AuthContext);
  const { request } = useHttp();

  const fetchUserEmail = useCallback(async () => {
    try {
      const fetched = await request("/api/user", "GET", null, {
        Authorization: `Bearer ${auth.token}`
      });
      setEmail(fetched);
    } catch (error) {}
  }, [auth, request]);

  useEffect(() => {
    fetchUserEmail();
  }, [fetchUserEmail]);

  const logoutHandler = event => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <span className="brand-logo">{email}</span>
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
