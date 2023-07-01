import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/CocoravivaStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";

const images = [
  {
    url: "./images/vivero1.jpeg",
  },
  {
    url: "./images/vivero2.jpeg",
  },
  {
    url: "./images/vivero3.jpeg",
  },
  {
    url: "./images/vivero4.jpeg",
  },
  {
    url: "./images/vivero5.jpeg",
  },
  {
    url: "./images/vivero6.jpeg",
  },
];

const plantImg = [
  {
    url: "./images/viveroMata1.jpeg",
  },
  {
    url: "./images/viveroMata2.jpeg",
  },
  {
    url: "./images/viveroMata3.jpeg",
  },
  {
    url: "./images/viveroMata4.jpeg",
  },
  {
    url: "./images/viveroMata5.jpeg",
  },
  {
    url: "./images/viveroMata6.jpeg",
  },
  {
    url: "./images/viveroMata7.jpeg",
  },
];

function Cocoraviva(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  return (
    <div className={classes.container}>
      <img src={require("./images/Vivero.png")} className={classes.titleImg} />
      <div className={classes.slideContainer}>
        <Slideshow slideImages={images} width={"700px"} height={"500px"} />
      </div>
      <div className={classes.content}>
        {language === "spanish" ? (
          <p>
            Somos un empresa de talla humana, fundada hace ya cinco años,
            contamos con una gran variedad de plantas para todos los gustos.
            <br />
            <br />
            Ordene su arreglo con plantas vivas, para celebraciones especiales o
            decoración.
            <br />
            <br />
            Venga y aproveche la oportunidad de llevarse con usted un recuerdo
            de la flora del Valle, con el toque único del{" "}
            <strong>Vivero Cocora Viva</strong>
          </p>
        ) : (
          <p>
            We are a small business with more than five years of experience in
            the flowers field, we have a great variety of flowers and plants for
            every taste.
            <br /> <br />
            Order your arrangement with live plants, for special celebrations or
            decoration.
            <br /> <br />
            Comme and take advantage of this opportunity to bring back home a
            memory with the special touch of the{" "}
            <strong>Florist Cocora Viva</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default withStyles(style)(Cocoraviva);
