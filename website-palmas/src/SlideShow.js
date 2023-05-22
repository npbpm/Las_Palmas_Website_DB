import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles/SlideShowStyle.css";

const Slideshow = (props) => {
  Slideshow.defaultProps = {
    isNavbar: false,
    width: "auto",
    height: "auto",
  };

  const { slideImages, width, height, isNavbar } = props;

  return (
    <div
      className={isNavbar ? "slide-container slideNav" : "slide-container"}
      style={{
        width: width,
      }}
    >
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div style={{ height: height }} className="each-slide" key={index}>
            <div>
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "100%",
                  height: "100%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: `${isNavbar ? "none" : "0px"}`,
                }}
                src={require(`${slideImage.url}`)}
                alt="Error not found"
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
