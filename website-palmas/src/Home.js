import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import ServiceCard from "./ServiceCard";
import { Typography } from "@mui/material";
import style from "./styles/HomeStyle";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/HomeWords";
import Slideshow from "./SlideShow";

function Home(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const servicesInfo = words[language];

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

  const services = servicesInfo.map((service, idx) => (
    <ServiceCard
      key={idx}
      img={service.img}
      title={service.title}
      description={service.description}
      display={idx}
      path={service.path}
    />
  ));

  const servicesFirstRow = [];

  const servicesSecondRow = [];

  const servicesThirdRow = [];

  for (var x of services) {
    if (x.key < 3) {
      servicesFirstRow.push(x);
    } else if (x.key < 6) {
      servicesSecondRow.push(x);
    } else {
      servicesThirdRow.push(x);
    }
  }

  function replaceWithBr(string) {
    return string.replace(/\n/g, "<br />");
  }

  return (
    <div className={classes.home}>
      <div className={classes.homeBody}>
        <div className={classes.topEl}>
          <div className={classes.leftSide}>
            <h1 className={classes.title} style={{ textAlign: "center" }}>
              Eco - Hotel Las Palmas De Cocora
            </h1>
            <p>
              {language === "spanish"
                ? "Bienvenido al Eco Hotel Las Palmas de Cocora, un refugio de tranquilidad y armonía en pleno corazón del impresionante Valle de Cocora. Aquí, podrás disfrutar de la naturaleza en su estado más puro mientras te sumerges en una experiencia única de descanso y relajación, para pasar tiempo en familia y/o con amigos, incluso tu amigo peludo es más que bienvenido."
                : "Welcome to Eco Hotel Las Palmas de Cocora, a haven of tranquility and harmony in the heart of the stunning Cocora Valley. Here, you can enjoy nature in its purest state while immersing yourself in a unique experience of rest and relaxation. Spend quality time with your family and/or friends, even your furry friend is more than welcome."}
            </p>
            <p
              dangerouslySetInnerHTML={
                language === "spanish"
                  ? {
                      __html: replaceWithBr(
                        "Date la oportunidad de vivir nuevas experiencias en la profundidad del Valle de Cocora.\n ¡Te esperamos con los brazos abiertos!"
                      ),
                    }
                  : {
                      __html: replaceWithBr(
                        "Give yourself the opportunity to live new experiences in the depths of the Cocora Valley.\n We await you with open arms!"
                      ),
                    }
              }
            />
          </div>
          <div className={classes.rightSide}>
            <Slideshow
              slideImages={slideImages}
              isNavbar={true}
              width={"100%"}
              height={"450px"}
            />
          </div>
        </div>
        <div className={classes.services}>
          <div className={classes.greenServices}>{servicesFirstRow}</div>
          <div className={classes.whiteServices}>{servicesSecondRow}</div>
          <div className={classes.greenServices}>{servicesThirdRow}</div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Home);
