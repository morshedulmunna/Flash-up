import React, { useEffect, useState } from "react";
import "./Login.css";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebaseInit";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="login container">
      <div className="login_wrapper">
        <div className="login_content">
          <h1>Sign in</h1>
          <p>
            To Keep connected with us. Please login your personal information
          </p>
          <form onSubmit={handleLogIn}>
            <div className="email common">
              <p>Email</p>
              <input
                onBlur={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="password common">
              <p>Password</p>
              <input
                onBlur={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Enter your Password"
                required
              />
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
