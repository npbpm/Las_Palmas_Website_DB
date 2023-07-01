import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/LodgingStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/lodgingWords";

const images = [
  {
    url: "./images/cabana1.jpeg",
  },
  {
    url: "./images/cabana5.jpeg",
  },
  {
    url: "./images/cabana6.jpeg",
  },
  {
    url: "./images/cabana7.jpeg",
  },
  {
    url: "./images/cabana9.jpeg",
  },
  {
    url: "./images/outsideCabin.jpeg",
  },
  {
    url: "./images/cabana10.jpeg",
  },
  {
    url: "./images/cabana11.jpeg",
  },
  {
    url: "./images/cabana12.jpeg",
  },
];

function Lodging(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title } = words[language];

  return (
    <div className={classes.container}>
      <img
        src={
          language === "spanish"
            ? require("./images/Hospedaje.png")
            : require("./images/Lodging.png")
        }
        alt="Hospedaje"
        className={classes.titleImg}
      />
      <div className={classes.slideContainer}>
        <Slideshow slideImages={images} width={"700px"} height={"500px"} />
      </div>

      <div className={classes.content}>
        {language === "spanish" ? (
          <p>
            Viva una experiencia de paz, tranquilidad y armonía que le ofrece
            las Palmas de Cocora en su cabaña construida en madera, rodeada de
            coloridas flores, palmas de cera y enmarcada por la silueta de las
            montañas de la cordillera central, hogar del cóndor andino.
            <br /> <br /> La cabaña es de 2 pisos completamente independiente.
            <br />
            Capacidad para 16 personas.
            <p
              style={{
                fontWeight: "700",
                color: "#D11B00",
              }}
            >
              <img src={require("./images/icons8-percentage.gif")} alt="%" /> EN
              TEMPORADA BAJA HAY DESCUENTOS EN LAS TARIFAS!!!{" "}
              <img src={require("./images/icons8-percentage.gif")} alt="%" />
            </p>
          </p>
        ) : (
          <p>
            Here you can experience true peace and bond with the nature that
            offers Las Palmas de Cocora in its cabin built with wood surrounded
            by flowers, wax palm trees and the mountains of the Valley, home of
            the Condor de los Andes.
            <br /> <br />
            The cabin has 2 floors completely independent from one another.
            <br />
            Capacity for 16 people.
            <p style={{ fontWeight: "700", color: "#D11B00" }}>
              <img src={require("./images/icons8-percentage.gif")} alt="%" />
              NOTE: DURING THE LOW SEASON THE PRICES ARE REDUCED!!!
              <img
                src={require("./images/icons8-percentage.gif")}
                alt="%"
              />{" "}
            </p>
          </p>
        )}
      </div>
    </div>
  );
}

export default withStyles(style)(Lodging);
