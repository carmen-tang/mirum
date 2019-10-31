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
    const { src, button, headline, index } = this.props.slide;
    const current = this.props.current.toString();
    let classNames = "slide";

    console.log(typeof current + " and " + typeof index);

    if (current === index) {
      classNames += " slide-current";
    } else if (current - 1 === index) {
      classNames += " slide-previous";
    } else if (current + 1 === index) {
      classNames += " slide-next";
    }

    console.log(classNames);

    return (
      <li
        ref={this.slide}
        className={classNames}
        onClick={this.handleSlideClick}
      >
        <div className="slide-image-wrapper">
          <img
            className="slide-image"
            alt={headline}
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>

        <article className="slide-content">
          <h2 className="slide-headline">{headline}</h2>
          <div className="slide-action btn">{button}</div>
        </article>
      </li>
    );
  }
}
