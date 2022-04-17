import React, { useEffect, useState } from "react";
import "./Login.css";
import { AiFillGoogleSquare } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebaseInit";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";

//toast

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, , error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  // successful Login ==>>
  useEffect(() => {
    if (user || userGoogle) {
      toast.success("Login Successfull!");
      navigate(from, { replace: true });
    }
  }, [from, navigate, user, userGoogle]);

  // Error Checking..
  useEffect(() => {
    if (error) {
      console.log(error.code);
      switch (error.code) {
        case "auth/wrong-password":
          toast.error("Password is Wrong! Forget your Password");
          break;
        case "auth/too-many-requests":
          toast.error("Too Many Requests!");
          break;
        case "auth/user-not-found":
          toast.error("User Not Available, Please Sign Up!");
          break;
        default:
          toast.error("Somting is wrong");
          break;
      }
    }
  }, [error]);

  // Handle Forget Pass
  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Mail Sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/missing-email") {
          toast.error("Please Enter Email", { id: "signup" });
        }
      });
  };

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
              <div className="subLink">
                <p onClick={handleForgetPassword}>
                  Forget your password? <span>Reset Here</span>
                </p>
                <Link to="/signup">
                  <span>Create an Account</span>
                </Link>
              </div>
            </div>
            <button type="submit">Sign in</button>
          </form>

          <div className="social__login">
            <i onClick={() => signInWithGoogle()}>
              <AiFillGoogleSquare />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
