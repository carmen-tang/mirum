import React, { Component } from "react";
import { Link } from "react-router-dom";

import mars from "../images/mars.jpg";
import jupiter from "../images/jupiter.jpg";
import titan from "../images/titan.jpg";
import europa from "../images/europa.jpg";
import enceladus from "../images/enceladus.jpg";

export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImage: "mars"
    };

    this.renderImage = this.renderImage.bind(this);
    this.changeMainImage = this.changeMainImage.bind(this);
  }

  componentDidMount() {
    if (window.location.href.indexOf("#Mars") !== -1) {
      this.setState({
        mainImage: "mars"
      });
    } else if (window.location.href.indexOf("#Titan") !== -1) {
      this.setState({
        mainImage: "titan"
      });
    } else if (window.location.href.indexOf("#Europa") !== -1) {
      this.setState({
        mainImage: "europa"
      });
    } else if (window.location.href.indexOf("#Jupiter") !== -1) {
      this.setState({
        mainImage: "jupiter"
      });
    } else if (window.location.href.indexOf("#Enceladus") !== -1) {
      this.setState({
        mainImage: "enceladus"
      });
    }
  }

  renderImage() {
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
          <Link to="/">mirum assessment</Link> / space tourism /{" "}
          <span className="pill"> detail page</span>
          <div className="main-image">{this.renderImage()}</div>
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
          <div className="quote">
            <p>
              The Earth is a very small stage in a vast cosmic arena. Think of
              the endless cruelties visited by the inhabitants of one corner of
              this pixel on the scarcely distinguishable inhabitants of some
              other corner, how frequent their misunderstandings, how eager they
              are to kill one another, how fervent their hatreds. Think of the
              rivers of blood spilled by all those generals and emperors so
              that, in glory and triumph, they could become the momentary
              masters of a fraction of a dot.
            </p>

            <p>
              Our posturings, our imagined self-importance, the delusion that we
              have some privileged position in the Universe, are challenged by
              this point of pale light. Our planet is a lonely speck in the
              great enveloping cosmic dark. In our obscurity, in all this
              vastness, there is no hint that help will come from elsewhere to
              save us from ourselves.
            </p>

            <p>
              The Earth is the only world known so far to harbor life. There is
              nowhere else, at least in the near future, to which our species
              could migrate. Visit, yes. Settle, not yet. Like it or not, for
              the moment the Earth is where we make our stand.
            </p>

            <p>
              It has been said that astronomy is a humbling and
              character-building experience. There is perhaps no better
              demonstration of the folly of human conceits than this distant
              image of our tiny world. To me, it underscores our responsibility
              to deal more kindly with one another, and to preserve and cherish
              the pale blue dot, the only home we've ever known.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
