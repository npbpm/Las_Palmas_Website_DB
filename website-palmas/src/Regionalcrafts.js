import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/RegionalcraftsStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/RegionalcraftsWords";

function Regionalcrafts(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title, text1, text2, text3 } = words[language];

  return (
    <div className={classes.container}>
      <img
        src={require("./images/Artesanias.png")}
        className={classes.titleImg}
      />
      <div className={classes.content}>
        <div className={classes.images}>
          <img
            src={require("./images/artesanias.jpeg")}
            alt="Error: Not Found"
            className={classes.firstImage}
          />
          <img
            src={require("./images/artesanias2.png")}
            alt="Error: Not Found"
            className={classes.roundedImage}
          />
        </div>
        <div className={classes.text}>
          <p>
            {text1} {text2}
            <br /> <br />
            {text3}
          </p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Regionalcrafts);
