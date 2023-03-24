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
        <Link to={path}>
          <img
            src={require(`${img}`)}
            className={showingDesc ? classes.serviceCardImg : ""}
          />
        </Link>

        <div className={classes.serviceCardInfo}>
          <h4>{title}</h4>
          <p
            className={
              showingDesc
                ? classes.descriptionShowing
                : classes.descriptionNotShowing
            }
          >
            {description}
          </p>
          <button
            style={
              showingDesc
                ? { display: "none", opacity: "0", transition: "all 0.2s" }
                : {
                    display: "block",
                    opacity: "1",
                    transition: "all 0.2s",
                  }
            }
            className={classes.btn}
            onClick={(e) => handleMouseClick(e)}
          >
            {language === "spanish" ? "Ver Más" : "More"}
          </button>
          <button
            style={
              !showingDesc
                ? { display: "none", opacity: "0", transition: "all 0.2s" }
                : {
                    display: "block",
                    opacity: "1",
                    transition: "all 0.2s",
                  }
            }
            className={classes.btn}
            onClick={(e) => handleMouseClick(e)}
          >
            {language === "spanish" ? "Ver Menos" : "Hide"}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  serviceCard: {
    width: "33%",
    minHeight: "600px",
    /* height: "auto", */
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "40px",
    overflow: "hidden",
    [sizes.down("md")]: {
      width: "48%",
      /* height: "450px", */
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
    minHeight: "680px",
    height: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#75B727",
    borderRadius: "8px",
    gap: "8px",
    padding: "12px",
    "& a": {
      [sizes.down("sm")]: {
        height: "180px",
      },
    },
    "& img": {
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: "80%",
      maxHeight: "60%",
      height: "300px",
      width: "400px",
      /* borderRadius: "50%", */
      position: "static",
      zIndex: "5",
      border: "none",
      /*  boxShadow:
        "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", */
      objectFit: "cover",
      /* "&:hover": {
        cursor: "pointer",
        transform: "scale(1.04)",
        transition: "ease-in-out all 0.2s",
      }, */
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
      color: "white",
      fontSize: "1.8rem",
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
