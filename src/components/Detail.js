import React, { Component } from "react";
import PropTypes from "prop-types";

import mars from "../images/mars.jpg";
import jupiter from "../images/jupiter.jpg";
import titan from "../images/titan.jpg";
import europa from "../images/europa.jpg";
import enceladus from "../images/enceladus.jpg";

class Detail extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      mainImage: "mars"
    };

    this.renderUserMessage = this.renderUserMessage.bind(this);
    this.changeMainImage = this.changeMainImage.bind(this);
  }

  renderUserMessage() {
    const { mainImage } = this.state;

    if (mainImage === "mars") {
      return <img src={mars} alt="Mars" />;
    } else if (mainImage === "titan") {
      return <img src={titan} alt="Titan" />;
    } else if (mainImage === "europa") {
      return <img src={europa} alt="Europa" />;
    } else if (mainImage === "jupiter") {
      return <img src={jupiter} alt="Jupiter" />;
    } else if (mainImage === "enceladus") {
      return <img src={enceladus} alt="Enceladus" />;
    }
  }

  changeMainImage(image) {
    this.setState({
      mainImage: image
    });
  }

  render() {
    return (
      <div className="container">
        <div className="detail-body">
          <span>mirum assessment</span> / <strong> detail page </strong>
          <div className="main-image">{this.renderUserMessage()}</div>
          <div className="gallery">
            <div className="gallery-item">
              <img
                src={mars}
                alt="Mars"
                onClick={() => this.changeMainImage("mars")}
              />
            </div>
            <div className="gallery-item">
              <img
                src={titan}
                alt="Titan"
                onClick={() => this.changeMainImage("titan")}
              />
            </div>
            <div className="gallery-item">
              <img
                src={europa}
                alt="Europa"
                onClick={() => this.changeMainImage("europa")}
              />
            </div>
            <div className="gallery-item">
              <img
                src={jupiter}
                alt="Jupiter"
                onClick={() => this.changeMainImage("jupiter")}
              />
            </div>
            <div className="gallery-item">
              <img
                src={enceladus}
                alt="Enceladus"
                onClick={() => this.changeMainImage("enceladus")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  toggleMenu: PropTypes.func
};

export default Detail;
