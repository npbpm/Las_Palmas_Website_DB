import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import ServiceCard from "./ServiceCard";
import { Typography } from "@mui/material";
import style from "./styles/HomeStyle";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/HomeWords";

function Home(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const servicesInfo = words[language];

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

  return (
    <div className={classes.home}>
      <div className={classes.homeBody}>
        <div>
          <Typography variant="h1">Eco - Hotel Las Palmas De Cocora</Typography>
          <section className={classes.location}>
            <img
              src={require("./images/Entrada.jpeg")}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                display: "block",
              }}
              alt="Error: Not found"
            />

            {language === "spanish" ? (
              <p
                style={{
                  textAlign: "left",
                  margin: "15px",
                  padding: "20px",
                  borderRadius: "13px",
                  color: "#3c4001",
                }}
              >
                Bienvenidos al Eco Hotel Las Palmas de Cocora, un refugio de
                tranquilidad y armonía en pleno corazón del impresionante Valle
                de Cocora. Aquí, podrás disfrutar de la naturaleza en su estado
                más puro mientras te sumerges en una experiencia única de
                descanso y relajación.
                <br />
                Estamos adentrados en el valle de Cocora, justo en el Km 10.
                Somos el primer restaurante al lado izquierdo.
                <br />
                Contamos con un lugar perfecto para pasar tiempo en familía y/o
                con amigos, incluso tu amigo peludo es más que bienvenido.
                <br />
                En nuestro hotel, podrás conectarte con la naturaleza mientras
                disfrutas de la mejor atención y servicio. Estamos deseando
                darte la bienvenida y ayudarte a crear recuerdos inolvidables en
                el hermoso Valle de Cocora.
                <br />
                Date la oportunidad de vivir nuevas experiencias en la
                profundidad del valle de cocora. ¡Te esperamos con los brazos
                abiertos!
              </p>
            ) : (
              <p
                style={{
                  textAlign: "left",
                  margin: "15px",
                  padding: "20px",
                  borderRadius: "13px",
                  color: "#422711",
                }}
              >
                Deep inside the Cocora Valley, we are located on the 10
                <sup>th</sup> Km of the Valley, first restaurant to your left.
                <br />
                This is the perfect place to spend time with your family and
                friends, you can even bring your pets!
                <br />
                Let yourself live this new experience in the deeps of the
                Valley, we are waiting for you with open arms!
              </p>
            )}
          </section>
        </div>
        <div className={classes.services}>
          <Typography variant="h3" fontSize="4rem" marginBottom="55px">
            {language === "spanish" ? "Nuestros Servicios" : "Our Services"}
          </Typography>
          <div className={classes.serviceCards}>{services}</div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Home);
