import React, { useState, useContext } from "react";
import "./styles/ServiceCard.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import sizes from "./styles/sizes";

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
      <div className={classes.content}>
        <img
          src={require(`${img}`)}
          onClick={(e) => handleMouseClick(e)}
          className={showingDesc ? classes.serviceCardImg : ""}
        />
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  serviceCard: {
    width: "33%",
    height: "380px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [sizes.down("md")]: {
      width: "48%",
      height: "450px",
      marginBottom: "10px",
    },
    [sizes.down("sm")]: {
      width: "98%",
    },

    /* "& a": {
      textDecoration: "none",
      color: "#F6923D",
    }, */
  },
  /* serviceCardImg: {
    filter: "brightness(30%)",
  }, */
  /* serviceTextShowing: {
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
  }, */
  /* linkButton: {
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
  }, */
  content: {
    width: "75%",
    height: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    "& img": {
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: "80%",
      maxHeight: "60%",
      height: "500px",
      width: "400px",
      /* borderRadius: "50%", */
      zIndex: 1,
      border: "none",
      /*  boxShadow:
        "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", */
      objectFit: "cover",
      /* "&:hover": {
        cursor: "pointer",
        transform: "scale(1.04)",
        transition: "ease-in-out all 0.2s",
      }, */
      "&:hover": {
        cursor: "pointer",
        transform: "translateY(-8px)",
        transition: "ease-in-out all 0.2s",
      },
    },
    "& p": {
      width: "85%",
      whiteSpace: "inital",
      fontSize: "1.1rem !important",
      lineHeight: "1.1rem",
      height: "auto",
      marginTop: "0px",
      padding: "15px 0",
    },
  },
};

export default withStyles(styles)(ServiceCard);
