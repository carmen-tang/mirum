import React from "react";

import amsterdam from "../images/architecture-amsterdam.jpg";
import apartments from "../images/architecture-apartments.jpg";
import brutalist from "../images/architecture-brutalist.jpg";
import waves from "../images/architecture-waves.jpg";
import balcony from "../images/architecture-balcony.jpg";

const Carousel = () => {
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const [slideOrder, setSlideOrder] = React.useState([
    "s0",
    "s1",
    "s2",
    "s3",
    "s4"
  ]);
  const [slideStyles, setSlideStyles] = React.useState({});

  const rotate = (s0, s1, s2, s3, s4) => {
    setSlideStyles({
      [s0]: { transform: "translateX(0px)", opacity: 1 },
      [s1]: { transform: "translateX(320px)", opacity: 1 },
      [s2]: { transform: "translateX(640px)", opacity: 1 },
      [s3]: { transform: "translateX(960px)", opacity: 0 },
      [s4]: { transform: "translateX(1280px)", opacity: 0 }
    });
    setSlideOrder([s0, s1, s2, s3, s4]);
  };

  const rotateRight = (spaces = 1) => {
    const s = [];

    slideOrder.forEach((slide, i) => {
      s[(i + spaces) % slideOrder.length] = slide;
    });

    setSelectedIdx(4 - ((4 - selectedIdx + spaces) % 5));
    rotate(s[0], s[1], s[2], s[3], s[4]);
  };

  const rotateLeft = (spaces = 1) => {
    const s = [];

    slideOrder.forEach((_, i) => {
      s[i] = slideOrder[(i + spaces) % slideOrder.length];
    });

    setSelectedIdx((selectedIdx + spaces) % 5);
    rotate(s[0], s[1], s[2], s[3], s[4]);
  };

  const handleDotClick = idx => {
    if (idx > selectedIdx) {
      rotateLeft(idx - selectedIdx);
    } else if (idx < selectedIdx) {
      rotateRight(selectedIdx - idx);
    }
  };

  return (
    <div className="container">
      <div className="carousel-wrap">
        <div className="carousel-container">
          <div className="carousel-btn prev-btn" onClick={() => rotateRight()}>
            <i className="carousel-arrow left" />
          </div>
          <ul className="carousel-slide-list">
            {slides.map((slide, i) => (
              <CarouselSlideItem
                key={i}
                slide={slide}
                style={slideStyles[`s${i}`]}
                active={selectedIdx === i}
                className={`carousel-slide-item s${i}`}
                place={i}
              />
            ))}
          </ul>
          <div className="carousel-btn next-btn" onClick={() => rotateLeft()}>
            <i className="carousel-arrow right" />
          </div>
        </div>
        <div className="carousel-dots">
          {slides.map((_, i) => {
            const className = selectedIdx === i ? "dot active" : "dot";
            return (
              <button
                key={i}
                className={className}
                onClick={() => handleDotClick(i)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CarouselSlideItem = ({ slide, style, className, active, place }) => (
  <li className={className} style={style}>
    <div className="carousel-slide-item-img">
      <img src={slide} className={active ? "active" : ""} alt={slide.id} />
    </div>
    <div className="slide-info">
      <p className="slide-title">{slideInfo[place].title}</p>
      <p>{slideInfo[place].desc}</p>
    </div>
  </li>
);

// separate from info because they are objects and must be read alone, not in an array with other info
const slides = [amsterdam, brutalist, apartments, balcony, waves];

// separate info for slides, but follows the same order as the slides to match up
const slideInfo = [
  {
    title: "Amsterdam",
    desc: "The city is vibrant and alive"
  },
  {
    title: "Brutalist",
    desc: "A political aesthetic, an attitude"
  },
  {
    title: "Apartments",
    desc: "Inner spaces of a good story"
  },
  {
    title: "Balcony",
    desc: "Uncountable rectangular protrusions"
  },
  {
    title: "Waves",
    desc: "There is no new wave, only the sea"
  }
];

export default Carousel;
