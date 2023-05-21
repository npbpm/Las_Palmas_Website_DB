import React, { useState, useContext } from "react";
import "./styles/ServiceCard.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import { withStyles } from "@mui/styles";
import style from "./styles/ServiceCardV2Style";

function ServiceCardV2(props) {
  const { language } = useContext(LanguageContext);

  const { img, title, description, display, path, classes } = props;

  return (
    <div className={classes.serviceCard}>
      <div className={classes.content}>
        <Link to={path}>
          <img src={require(`${img}`)} className={classes.serviceCardImg} />
        </Link>

        <div className={classes.serviceCardInfo}>
          <h4>{title}</h4>
          <Link to={path}>
            {language === "spanish" ? "Ver Más" : "See More"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(ServiceCardV2);
