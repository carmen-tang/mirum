import React from "react";

const Hero = () => {
  return (
    <div class="hero-bg">
      <div class="container unrotate">
        <div class="row">
          <div class="hero-blurb">
            <h1>Mirum Assessment</h1>
            <p>
              The key to creating a responsive slanted line is the 'skew' CSS
              property. Initially I used :after to create the effect, but you
              couldn't use images or gradients. If you skew the entire element
              instead, then unskew its contents you achieve the same effect but
              as a single element you can apply effects to.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
