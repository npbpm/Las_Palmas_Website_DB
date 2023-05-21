import * as React from "react";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { withStyles } from "@mui/styles";
import style from "./styles/ServicesStyle";
import words from "./text/HomeWords";
import ServiceCardV2 from "./ServiceCardV2";

function Services(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const servicesInfo = words[language];

  const services = servicesInfo.map((service, idx) => (
    <ServiceCardV2
      key={idx}
      img={service.img}
      title={service.title}
      description={service.description}
      display={idx}
      path={service.path}
    />
  ));

  return (
    <div className={classes.container}>
      <h1>{language === "spanish" ? "SERVICIOS" : "SERVICES"}</h1>
      {language === "spanish" ? (
        <p>
          Disfruta de nuestra amplia variedad de servicios diseñados para ti y
          tu familia. Desde un menú diverso y sabroso hasta un personal atento y
          amigable, nos esforzamos por hacer de tu visita una experiencia
          memorable. ¡Ven y descubre nuestro ambiente acogedor y disfruta de
          momentos especiales con tus seres queridos!
        </p>
      ) : (
        <p>
          Enjoy our wide range of services designed for you and your family.
          From a diverse and delicious menu to attentive and friendly staff, we
          strive to make your visit a memorable experience. Come and discover
          our cozy atmosphere and enjoy special moments with your loved ones!
        </p>
      )}
      <div className={classes.services}>{services}</div>
    </div>
  );
}

export default withStyles(style)(Services);
