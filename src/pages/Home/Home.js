import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <h2>Hi Everyone!</h2>
        <h1>I'm Munna - Photografer</h1>
        <p>
          Photography is an art which sets you free. I am doing wedding
          photography professionally for 5 years. Being a wedding photographer
          connecting with people is the most important & fascinating thing.
          Every wedding is a new experience and every photograph become part of
          it!
        </p>
        <div id="more_btn">
          <Link to="/about">
            <button>About me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
