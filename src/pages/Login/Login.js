import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login container">
      <div className="login_wrapper">
        <div className="login_content">
          <h1>Sign in</h1>
          <form>
            <div className="email">
              <p>Email</p>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div className="Password">
              <p>Email</p>
              <input type="password" placeholder="Enter your Password" />
            </div>
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
