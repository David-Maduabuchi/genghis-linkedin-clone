import { useState } from "react";
import OpenToWork from "./OpenToWork";
import "./Z-Gallery.scss";
import Conversations from "./Conversations";
import Up2Date from "./Up2Date";
const components = [<OpenToWork />, <Conversations />, <Up2Date />];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? components.length - 1 : currentIndex - 1;
    setDirection("left");
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === components.length - 1 ? 0 : currentIndex + 1;
    setDirection("right");
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-container">
      {currentIndex > 0 && (
        <img
          src="arrow-head-left.svg"
          alt="Previous"
          className="arrow left-arrow"
          onClick={goToPrevious}
        />
      )}
      <div className={`content-container ${direction}`}>
        {components[currentIndex]}
      </div>
      {currentIndex < components.length - 1 && (
        <img
          src="arrow-head-right.svg"
          alt="Next"
          className="arrow right-arrow"
          onClick={goToNext}
        />
      )}
    </div>
  );
};

export default Gallery;
