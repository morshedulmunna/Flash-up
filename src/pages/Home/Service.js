import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { img, title, price, dec } = service;
  return (
    <>
      <div className="service_wrapper">
        <div className="content">
          <img src={img} alt="" />
          <div className="title_price">
            <h2> {title} </h2>
            <h2>${price} </h2>
          </div>

          <p>{dec.slice(0, 150)}</p>
          <Link to="/checkout">
            <button>Explore Package</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Service;
