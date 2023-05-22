import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import style from "./styles/PackagesStyle";
import { Link } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/PackagesWords";
import Slideshow from "./SlideShow";

const slideImages = [
  {
    url: "./images/header1.jpg",
  },
  {
    url: "./images/header2.jpg",
  },
  {
    url: "./images/header3.jpg",
  },
];

function Packages(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const {
    title,
    description1,
    description2,
    description4,
    description5,
    description6,
    description7,
    includes,
    ownStyleTitle,
    ownStyleText1,
    ownStyleText2,
    friendsText,
    friendsArrival,
    friendsLunch,
    friendsRefreshment,
    friendsTitle,
    birthdayTitle,
    birthdayDesc1,
    birthdayDesc2,
  } = words[language];

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.slides}>
        <Slideshow
          slideImages={slideImages}
          isNavbar={false}
          width={"100%"}
          height={"470px"}
        />
      </div>
      {language === "spanish" ? (
        <p>
          Aquí en las Palmas de Cocora tenemos un plan para todo el mundo. Ya
          sea por ti solo o con tus amigos, ven a disfrutar con nosotros!
        </p>
      ) : (
        <p>
          Here at Las Palmas de Cocora, we have a plan for everyone. Whether
          you're by yourself or with your friends, come and enjoy with us!
        </p>
      )}
      <div
        style={{
          backgroundColor: "#F2F2F2",
          width: "100%",
          paddingBottom: "40px  ",
        }}
      >
        <div className={classes.packages}>
          <div className={classes.package}>
            <img
              alt="Error: Not Found"
              src={require("./images/estiloPropio.jpeg")}
            />
            <Typography variant="h4">{ownStyleTitle}</Typography>
            <div className={classes.cardText}>
              <p style={{ background: "none", boxShadow: "none" }}>
                {ownStyleText2}
              </p>
            </div>

            <Link to="/contact-us" className={classes.reserveBtn}>
              {language === "spanish" ? "Reservar" : "Book"}
            </Link>
          </div>
          <div className={classes.package}>
            <img
              alt="Error: Not Found"
              src={require("./images/happy-birthday.jpg")}
            />
            <Typography variant="h4">{birthdayTitle}</Typography>
            <div className={classes.cardText}>
              <p style={{ background: "none", boxShadow: "none" }}>
                {birthdayDesc1}
              </p>
            </div>
            <Link to="/contact-us" className={classes.reserveBtn}>
              {language === "spanish" ? "Reservar" : "Book"}
            </Link>
          </div>
          <div className={classes.package}>
            <img
              alt="Error: Not Found"
              src={require("./images/valley-ge1efec97d_1920.jpg")}
            />
            <Typography variant="h4">{friendsTitle}</Typography>
            <div className={classes.cardText}>
              <p style={{ background: "none", boxShadow: "none" }}>
                {friendsText}
              </p>
            </div>
            <Link to="/contact-us" className={classes.reserveBtn}>
              {language === "spanish" ? "Reservar" : "Book"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Packages);
