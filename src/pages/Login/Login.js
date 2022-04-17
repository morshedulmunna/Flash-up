import React from "react";
import "./Login.css";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login container">
      <div className="login_wrapper">
        <div className="login_content">
          <h1>Sign in</h1>
          <p>
            To Keep connected with us. Please login your personal information
          </p>
          <form>
            <div className="email common">
              <p>Email</p>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div className="password common">
              <p>Password</p>
              <input type="password" placeholder="Enter your Password" />
            </div>
            <button type="submit">Sign in</button>
          </form>

          <div className="social__login">
            <i>
              <AiFillGoogleSquare />
            </i>
            <i>
              <FaGithubSquare />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
