import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/GamesStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/GamesWords";

const images = [
  {
    url: "./images/Atracciones.jpeg",
  },
  {
    url: "./images/atracciones1.jpeg",
  },
  {
    url: "./images/ternero1.jpeg",
  },
  {
    url: "./images/caballos1.jpeg",
  },
];

function Games(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title, content, games, volley, football, animals, lake, horses } =
    words[language];

  return (
    <div className={classes.container}>
      <img
        src={
          language === "spanish"
            ? require("./images/Atracciones.png")
            : require("./images/Attractions.png")
        }
        className={classes.titleImg}
      />
      <div className={classes.slideContainer}>
        <Slideshow slideImages={images} width={"700px"} height={"500px"} />
      </div>
      <div className={classes.content}>
        <div className={classes.description}>
          <Typography variant="h4">{content}</Typography>
          <ul>
            <li>{games}</li>
            <li>{volley}</li>
            <li>{football}</li>
            <li>{animals}</li>
            <li>{lake}</li>
            <li>{horses}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Games);
