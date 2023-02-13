import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import style from "./styles/PackagesStyle";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/PackagesWords";

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
      <div className={classes.sales}>
        <img
          alt="Error: Not Found"
          src={require("./images/promocion.jpg")}
          style={{ width: "700px", height: "600px" }}
        />
        <p>
          <strong>{description1}</strong> {description2} {description4}
          <br /> <strong>{description5}</strong> {description6}
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#422711",
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
            <p style={{ background: "none", boxShadow: "none" }}>
              {ownStyleText1}
              <br />
              {ownStyleText2}
            </p>
          </div>
          <div className={classes.package}>
            <img
              alt="Error: Not Found"
              src={require("./images/happy-birthday.jpg")}
            />
            <Typography variant="h4">{birthdayTitle}</Typography>
            <p style={{ background: "none", boxShadow: "none" }}>
              {birthdayDesc1}
              <br />
              {birthdayDesc2}
            </p>
          </div>
          <div className={classes.package}>
            <img
              alt="Error: Not Found"
              src={require("./images/valley-ge1efec97d_1920.jpg")}
            />
            <Typography variant="h4">{friendsTitle}</Typography>
            <p style={{ background: "none", boxShadow: "none" }}>
              {friendsText}
            </p>
            <ul>
              <strong>{includes}</strong>
              <li>{friendsArrival}</li>
              <li>{friendsLunch}</li>
              <li>{friendsRefreshment}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Packages);
