import React from "react";

export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>AuthPage</h1>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Enter email"
                  id="email"
                  type="email"
                  className="validate"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Enter password"
                  id="password"
                  type="password"
                  name="password"
                  className="validate"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="btn">Login</button>
            <button className="btn">Registrate</button>
          </div>
        </div>
      </div>
    </div>
  );
};
