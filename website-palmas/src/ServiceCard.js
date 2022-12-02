import React, { useState, useContext } from "react";
import "./styles/ServiceCard.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

function ServiceCard(props) {
  const { language } = useContext(LanguageContext);

  const { img, title, description, display, path, classes } = props;

  const [showingDesc, setShowingDesc] = useState(false);

  const handleMouseClick = (e) => {
    e.stopPropagation();
    setShowingDesc(!showingDesc);
  };

  return (
    <div className={classes.serviceCard}>
      <img
        src={require(`${img}`)}
        onClick={(e) => handleMouseClick(e)}
        className={showingDesc ? classes.serviceCardImg : ""}
      />
      <div
        className={
          showingDesc
            ? classes.serviceTextShowing
            : classes.serviceTextNotShowing
        }
      >
        <Typography variant="h5">{title}</Typography>
        {description}
        <div className={classes.linkButton}>
          <Link to={path}>{language === "spanish" ? "Ver Más" : "More"}</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  serviceCard: {
    width: "23%",
    height: "550px",
    position: "relative",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
      height: "500px",
      width: "400px",
      borderRadius: "50%",
      zIndex: 1,
      border: "none",
      "&:hover": {
        cursor: "pointer",
        transform: "scale(1.04)",
        transition: "ease-in-out all 0.2s",
      },
    },
    "& a": {
      textDecoration: "none",
      color: "#F6923D",
    },
  },
  serviceCardImg: {
    filter: "brightness(30%)",
  },
  serviceTextShowing: {
    position: "absolute",
    zIndex: 5,
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "auto",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    color: "rgb(255,255,255)",
    visibility: "visible",
    fontSize: "1.08rem",
    fontFamily: "'Bebas Neue', cursive",
    textShadow:
      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    transition: "ease-in-out all 0.2s",
  },
  serviceTextNotShowing: {
    visibility: "hidden",
  },
  linkButton: {
    position: "absolute",
    top: "90%",
    transform: "translate(-50%,50%)",
    left: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100px",
    height: "auto",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "10px",
    fontSize: "1.7rem",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(0,0,0,0.8)",
      transition: "ease-in-out all 0.2s",
    },
  },
};

export default withStyles(styles)(ServiceCard);
