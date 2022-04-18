import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../../photos";

import "./PhotoGallery.css";

// const image = [];

const PhotoGallery = () => {
  return (
    <div className="container">
      <div className="gallery_Wrapper">
        <h1>Photo Gallery</h1>
        <div className="gallery1">
          <Gallery photos={photos} direction={"column"} />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
