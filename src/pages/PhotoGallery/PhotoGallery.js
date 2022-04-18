import React from "react";
import GalleryView from "./GalleryView";
import "./PhotoGallery.css";

// const image = [];

const PhotoGallery = () => {
  return (
    <div className="container">
      <div className="gallery_Wrapper">
        <h1>Photo Gallery</h1>
        <div className="gallery1">
          <GalleryView />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
