import React from "react";
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
            <h2>$ {price} </h2>
          </div>

          <p>{dec.slice(0, 150)}</p>
          <button>Explore Package</button>
        </div>
      </div>
    </>
  );
};

export default Service;
