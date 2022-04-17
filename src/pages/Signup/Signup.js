import React from "react";

const Signup = () => {
  return (
    <div className="login container">
      <div className="login_wrapper">
        <div className="login_content">
          <h1>Create an Account</h1>
          <p>
            To Keep connected with us. Create and Account with your personal
            information
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
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
