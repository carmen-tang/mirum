import React, { Component } from "react";

import Slide from "./Slide";

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn-${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = { current: 0 };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
  }

  handlePreviousClick() {
    const previous = this.state.current - 1;

    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous
    });
  }

  handleNextClick() {
    const next = parseInt(this.state.current) + 1;

    this.setState({
      current: next === this.props.slides.length ? 0 : next
    });
  }

  handleDotClick = index => {
    this.setState({
      current: index
    });
  };

  render() {
    const { current } = this.state;
    const { slides } = this.props;
    const headingId = ({ heading }) =>
      `slider-heading-/${heading.replace(/\s+/g, "-").toLowerCase()}/`;
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slides.length)}%)`
    };

    return (
      <div className="carousel-wrap">
        <div className="slider" aria-labelledby={headingId}>
          <ul className="slider-wrapper" style={wrapperTransform}>
            {/* Mapping the slides. When the last slide is in first position, return to first slide. */}
            {slides.map(slide => {
              return (
                <Slide
                  key={slide.index}
                  slide={slide}
                  current={current}
                />
              );
            })}
          </ul>

          <div className="slider-controls">
            <SliderControl
              type="previous"
              handleClick={this.handlePreviousClick}
            />

            <SliderControl type="next" handleClick={this.handleNextClick} />
          </div>
        </div>
        <div className="carousel-dots">
          {slides.map((_, i) => {
            const className = current === i ? "dot active" : "dot";
            return (
              <button
                key={i}
                className={className}
                onClick={() => this.handleDotClick(i)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
