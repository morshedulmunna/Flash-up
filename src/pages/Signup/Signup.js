import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase/firebaseInit";

const Signup = () => {
  const [email, setEmail] = useState("");
  // const [myError, setMyError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigat = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // setMyError("Password didn't Match");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      navigat("/");
    }
  }, [navigat, user]);

  return (
    <div className="login container">
      <div className="login_wrapper">
        <div className="login_content">
          <h1>Create an Account</h1>
          <p>
            To Keep connected with us. Create and Account with your personal
            information
          </p>
          <form onSubmit={handleCreateUser}>
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
            <div className="password common">
              <p>Confirm Password</p>
              <input
                onBlur={(event) => setconfirmPassword(event.target.value)}
                type="password"
                placeholder="Enter again ......"
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
