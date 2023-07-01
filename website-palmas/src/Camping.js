import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/CampingStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/CampingWords";

const images = [
  {
    url: "./images/CampingZone.jpeg",
  },
  {
    url: "./images/camping1.jpeg",
  },
  {
    url: "./images/camping3.jpeg",
  },
  {
    url: "./images/campingFull.jpg",
  },
];

function Camping(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const {
    title,
    description,
    services,
    parking,
    pagoda,
    bathrooms,
    showers,
    sink,
    firewood,
    campingPrice,
    ownCampingEquipment,
    note,
    rules,
  } = words[language];

  return (
    <div className={classes.container}>
      <img
        src={
          language === "spanish"
            ? require("./images/Campamento.png")
            : require("./images/Camp.png")
        }
        className={classes.titleImg}
        alt="Couldn't charge the image"
      />
      <div className={classes.content}>
        <div className={classes.slideContainer}>
          <Slideshow slideImages={images} width={"600px"} height={"600px"} />
        </div>
        <div className={classes.description}>
          <p>{description}</p>
          <br />
          <ul className={classes.list}>
            <Typography variant="h4">{services}</Typography>
            <div style={{ marginRight: "auto", marginLeft: "auto" }}>
              <li>{parking}</li>
              <li>{pagoda}</li>
              <li>{bathrooms}</li>
              <li>{showers}</li>
              <li>{sink}</li>
              <li>{firewood}</li>
            </div>
          </ul>
          <ul className={classes.list}>
            <div style={{ marginRight: "auto", marginLeft: "auto" }}>
              <li>
                <span style={{ fontWeight: "900" }}>{campingPrice}</span>
                <span style={{ textDecoration: "underline" }}>$20.000</span>,
                {ownCampingEquipment}
              </li>
            </div>
          </ul>
          <br />
          <p>
            <span style={{ fontWeight: "900" }}>{note}</span>
            {rules}
          </p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Camping);
