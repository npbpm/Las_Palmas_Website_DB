import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import Menu from "./images/Menu.pdf";
import style from "./styles/RestaurantStyle";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red, green, yellow } from "@mui/material/colors";
import LandscapeIcon from "@mui/icons-material/Landscape";
import AirIcon from "@mui/icons-material/Air";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/RestaurantWords";

const slideImages = [
  {
    url: "./images/AtardercerPalmas.jpeg",
  },
  {
    url: "./images/Who-are-we.jpeg",
  },
  {
    url: "./images/FrontRestaurant.jpeg",
  },
  {
    url: "./images/FrenteRestaurante.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.37 PM.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.43 PM.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.37 PM(1).jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.40 PM.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.45 PM.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.45 PM(1).jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.45 PM(2).jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.45 PM(3).jpeg",
  },
  {
    url: "./images/platoEntero.jpeg",
  },
  {
    url: "./images/postre.jpeg",
  },
];

function Restaurant(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const {
    title,
    description,
    menuTitle,
    menu,
    ambientTitle,
    romantic,
    romanticText,
    nature,
    natureText,
    cultural,
    culturalText,
  } = words[language];

  return (
    <div className={classes.container}>
      <img
        src={require("./images/Restaurante.png")}
        className={classes.titleImg}
      />
      <p className={classes.subtitle}>{description}</p>
      <div className={classes.content}>
        <div className={classes.presentation}>
          <div className={classes.images}>
            <img
              src={require("./images/FrenteEnteroRestaurante.jpeg")}
              className={classes.restaurantImg}
            />
            <img
              src={require("./images/WhatsApp Image 2022-10-02 at 11.50.45 PM(3).jpeg")}
              className={classes.dessertImg}
            />
          </div>
          <div className={classes.menu}>
            <a
              className={classes.menuItem}
              href={Menu}
              target="_ blank"
              rel="noreferrer"
            >
              <img
                src={require("./images/menu.png")}
                className={classes.menuImg}
              />
            </a>
            <p className={classes.menuText}>
              {menuTitle}{" "}
              <a
                className={classes.menuItem}
                href={Menu}
                target="_ blank"
                rel="noreferrer"
              >
                {menu}
              </a>
            </p>
          </div>
        </div>
        <div className={classes.ambients}>
          <h2 className={classes.ambientTitle}>{ambientTitle}</h2>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Restaurant);
