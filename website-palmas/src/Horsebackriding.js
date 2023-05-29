import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/HorsebackridingStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/HorsebackridingWords";

function Horsebackriding(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title } = words[language];

  return (
    <div className={classes.container}>
      <img
        src={require("./images/Paseos ecológicos.png")}
        className={classes.titleImg}
        alt="Couldn't charge the image"
      />
      <div className={classes.content}>
        <div className={classes.section}>
          <Typography variant="h3">
            {language === "spanish" ? "Caminatas" : "Hikes"}
          </Typography>
          <div className={classes.item}>
            <img
              className={classes.hikeImg}
              src={require("./images/caminata1.jpg")}
              alt="Error Not Found"
            />
            {language === "spanish" ? (
              <p>
                En el restaurante Las Palmas de cocora, le ofrecemos varias
                actividades ecológicas para que disfrute de una experiencia
                única durante su visita al Valle de Cocora.
                <br />
                Para los amantes del deporte y de la naturaleza, Las Palmas les
                ofrece una caminata por un sendero privado, aquí podran
                aprovechar de esta oportunidad para admirar la belleza del
                paisaje, interactuar con la fauna del Valle y terminar con una
                visita a nuestra cascada.
              </p>
            ) : (
              <p>
                In Las Palmas restaurant, we oofer you various eco-friendly
                activities for you to enjoy of a one in a lifetime experience
                during your visit to the Cocora Valley.
                <br />
                For those sports and nature lovers, Las Palmas offers you a hike
                in our private path, during this hike you can admire the beauty
                of the Valley, interact with the Valley's wildlife and end with
                a visit to our own waterfall.
              </p>
            )}
          </div>
        </div>
        <div className={classes.section}>
          <Typography variant="h3">
            {language === "spanish" ? "Cabalgatas" : "Horse Ride"}
          </Typography>
          <div className={classes.item}>
            <img
              className={classes.horseImg}
              src={require("./images/caballos1.jpeg")}
              alt="Error Not Found"
            />
            {language === "spanish" ? (
              <p>
                Para los entusiastas de los caballos, les ofrecemos una
                cabalgata entre las montañas, acompañados en todo momento por
                uno de nuestros caballistas.
                <br /> <br />
                Dese la oportunidad de disfrutar de la belleza del Valle
                mientras vive una experiencia única en familia y/o entre amigos!
              </p>
            ) : (
              <p>
                For those horse enthusiasts, we offer you a horseback ride
                between the mountains, you will be joined by one of our riders
                at all times.
                <br /> <br />
                Let yourself enjoy the beauty of the Valley while you live a
                once in a lifetime experience in family or with friends!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Horsebackriding);
