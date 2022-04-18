import React from "react";
import Gallery from "react-photo-gallery";
import Banner from "./Banner";
import "./Home.css";
import Service from "./Service";
import { photos } from "../../photos";
import { Link } from "react-router-dom";

const pack = [
  {
    id: 1,
    title: "Classic Photo & Video",
    price: 245,
    img: "https://weddingdiary.com.bd/wp-content/uploads/2021/08/8J5A2509-370x270.jpg",
    dec: "1 Top Photographer, 4 Hours Shoot, Portrait Light Setup, Numbers of Photos: Unlimited (All Post Processed),Print: 4R (4x6): 100 Copies & 12L (12X18): 1 Copy, All Printed Photos Delivered With Matte/Glossy Paper. Video Quality: Full HD 1080p (1920X1080) With Blu-Ray Disc, 20-50 Minutes Edited Cinematography With Your Selected Songs",
  },
  {
    id: 2,

    title: "Expressions Photo & Video",
    price: 365,
    img: "https://weddingdiary.com.bd/wp-content/uploads/2021/08/12-370x270.jpg",
    dec: "A Certified Videographer for 8 Hours,30 Page, 10X10 Wedding Photo Album, Unlimited Photos & Video Captured All Edited High-Resolution Copyright Released Digital Photo Files",
  },
  {
    id: 3,
    title: "Storytelling Photo & Video",
    price: 445,
    img: "https://weddingdiary.com.bd/wp-content/uploads/2021/08/BS9A8233..-370x270.jpg",
    dec: "A Certified Photographer for 10 Hours,Second Certified Photographer for 8 Hours, Unlimited Coverage Locations, Unlimited Photos & Video Captured ",
  },
];

const Home = () => {
  return (
    <>
      <div className="home">
        <Banner />
      </div>
      <div className="container">
        <div className="tittle">
          <h1>Photography / Videography Service</h1>
        </div>
        <div className="service">
          {pack.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>

        <div className="gallery">
          <h1>Photography / Videography Gallery</h1>
          <div className="home_grallery">
            <Gallery photos={photos.slice(0, 6)} direction={"column"} />
          </div>
          <Link to="photo-gallery">
            <h2>View All Gallery</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
