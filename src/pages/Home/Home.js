import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <div className="home">
        <Banner />
      </div>
      <div className="container">
        <Service />
      </div>
    </>
  );
};

export default Home;
