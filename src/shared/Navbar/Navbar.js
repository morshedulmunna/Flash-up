import "./NAvbar.css";
import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { MdNoFlash } from "react-icons/md";
import CustomLink from "../../RouterHelp/CustomLink";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebaseInit";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="row">
            <div className="logo">
              <Link to="/">
                <span>
                  <MdNoFlash />
                  <span>FlashUp </span>
                </span>
              </Link>
            </div>
            <div onClick={() => setOpen(!open)} className="toggle">
              {open ? <FaBars /> : <FaTimes />}
            </div>
            <div className={!open ? "nav__mob" : "nav__item"}>
              <ul>
                <CustomLink to="/">
                  <span>Home</span>
                </CustomLink>
                <CustomLink to="/photo-gallery">
                  <span>Photo Gallery</span>
                </CustomLink>
                <CustomLink to="/blog">
                  <span>Blog</span>
                </CustomLink>
                <CustomLink to="/about">
                  <span>About</span>
                </CustomLink>
              </ul>
              <div className="btn">
                <Link to="/login">
                  {user ? (
                    <button onClick={() => signOut(auth)} id="sign__in">
                      Log out
                    </button>
                  ) : (
                    <button id="log__in">Login</button>
                  )}
                </Link>
                <Link to="/signup">
                  {!user && <button id="sign__in">Sign up</button>}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
