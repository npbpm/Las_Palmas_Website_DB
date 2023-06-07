import React, { useState, useContext } from "react";
import "./styles/ServiceCard.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import { withStyles } from "@mui/styles";
import sizes from "./styles/sizes";

function ServiceCard(props) {
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
        </div>
      </div>
    </div>
  );
}

const styles = {
  serviceCard: {
    width: "33%",
    /* height: "auto", */
    // position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "25px",
    overflow: "hidden",
    [sizes.down("md")]: {
      marginBottom: "10px",
    },
    [sizes.down("us")]: {
      width: "90%",
    },
  },
  serviceCardImg: {
    width: "100%",
  },
  content: {
    width: "85%",
    height: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: "8px",
    gap: "8px",
    paddingTop: "25px",
    "& a": {
      [sizes.down("sm")]: {
        height: "180px",
      },
      [sizes.down("xs")]: {
        height: "140px",
      },
      [sizes.down("xxs")]: {
        height: "100px",
      },
      [sizes.down("us")]: {
        width: "95%",
        height: "auto",
      },
    },
    "& img": {
      marginRight: "auto",
      marginLeft: "auto",
      marginBottom: "25px",
      maxHeight: "80%",
      aspectRatio: 3 / 2,
      objectFit: "contain",
      position: "static",
      zIndex: "5",
      border: "none",
      borderRadius: "10px",
      objectFit: "cover",
      [sizes.down("sm")]: {
        maxWidth: "100%",
        maxHeight: "100%",
      },
      "&:hover": {
        cursor: "pointer",
        transform: "translateY(-8px)",
        transition: "ease-in-out all 0.2s",
      },
    },
    "& h4": {
      color: "#466421",
      fontSize: "1.8rem",
      [sizes.down("xxs")]: {
        fontSize: "20px",
      },
      [sizes.down("us")]: {
        fontSize: "1.6rem",
      },
    },
    "& p": {
      color: "white",
      width: "85%",
      whiteSpace: "inital",
      fontSize: "1.1rem !important",
      lineHeight: "1.1rem",
      height: "auto",
      marginTop: "0px",
      padding: "15px 0",
      [sizes.down("us")]: {
        fontSize: "0.8rem !important",
      },
    },
  },
  descriptionNotShowing: {
    visibility: "hidden",
    opacity: "0",
    transition: "all 0.3s",
  },
  descriptionShowing: {
    visibility: "visible",
    opacity: "1",
    transition: "all 0.3s",
  },
  btn: {
    fontSize: "1.5rem",
    padding: "18px 55px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "8px",
    margin: "15px 0px",
    [sizes.down("us")]: {
      fontSize: "1.2rem",
    },
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.04)",
      transition: "linear all 0.2s",
    },
  },
  serviceCardInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default withStyles(styles)(ServiceCard);
