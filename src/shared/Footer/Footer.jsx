import React from "react";
import "./Footer.css";
import { MdNoFlash } from "react-icons/md";
import {
  TiSocialInstagram,
  TiSocialSkype,
  TiSocialYoutube,
  TiSocialFacebook,
  TiSocialFlickr,
} from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="logo">
            <Link to="/">
              <i>
                <MdNoFlash />
              </i>
            </Link>
          </div>
          <div className="about__part">
            <h3>About us</h3>
            <div>
              <span>Home</span>
              <span>Get Contact Me</span>
              <span>FAQ</span>
            </div>
          </div>
          <div className="product">
            <h3>Service & Discount</h3>
            <div>
              <span>Videography</span>
              <span>Photography</span>
              <span>Membership Discounts</span>
            </div>
          </div>
          <div className="subscribe">
            <div className="subs__wrapper">
              <h3> Ready to Join with us_____</h3>
              <div className="input__Wrapper">
                <input type="Email" placeholder="Type your Email" />
                <button type="Submit">Subscribe</button>
              </div>
              <div className="social">
                <strong>
                  <TiSocialInstagram />
                </strong>
                <b>
                  <TiSocialSkype />
                </b>
                <b>
                  <TiSocialFacebook />
                </b>
                <b>
                  <TiSocialYoutube />
                </b>
                <b>
                  <TiSocialFlickr />
                </b>
              </div>
            </div>
          </div>
        </div>
        <span
          style={{
            color: "#fff",
          }}
        >
          ©copyright all credit 2022 morshedulmunna
        </span>
      </div>
    </div>
  );
};

export default Footer;
