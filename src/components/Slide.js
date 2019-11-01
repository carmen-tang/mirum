import React, { Component } from "react";

export default class Slide extends Component {
  constructor(props) {
    super(props);

    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.slide = React.createRef();
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index);
  }

  imageLoaded(event) {
    event.target.style.opacity = 1;
  }

  render() {
    const { src, title, desc, index } = this.props.slide;
    const current = this.props.current.toString();
    let classNames = "slide";

    if (current === index) {
      classNames += " slide-current";
    } else if (current - 1 === index) {
      classNames += " slide-previous";
    } else if (current + 1 === index) {
      classNames += " slide-next";
    }

    return (
      <li
        ref={this.slide}
        className={classNames}
        onClick={this.handleSlideClick}
      >
        <div className="slide-image-wrapper">
          <img
            className="slide-image"
            alt={title}
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>

        <div className="slide-content">
          <h2 className="slide-headline">{title}</h2>
          <div className="slide-action btn">{desc}</div>
        </div>
      </li>
    );
  }
}
