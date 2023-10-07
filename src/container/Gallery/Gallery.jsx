import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";
import React from "react";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          rerum nulla reprehenderit impedit consectetur voluptatum ducimus,
          maxime numquam vel
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-imgs">
        <div className="app__gallery-imgs-container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-imgs-card"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="galleryimage" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-imgs-arrows">
          <BsArrowLeftShort
            className="app__gallery-arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="app__gallery-arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
