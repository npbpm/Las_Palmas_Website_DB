import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/GlampingStyle";
import { LanguageContext } from "./context/LanguageContext";

const openNewTab = (e, url) => {
  e.preventDefault();
  window.open(url, "_blank", "noopener,noreferer");
};

function Glamping(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  return (
    <div className={classes.container}>
      <img
        src={require("./images/Glamping.png")}
        className={classes.titleImg}
        alt="Couldn't charge the image"
      />
      <div className={classes.contact}>
        <div style={{ marginTop: "-5px" }}>
          <button
            onClick={(e) =>
              openNewTab(
                e,
                "https://api.whatsapp.com/send/?phone=573232269201&text&type=phone_number&app_absent=0"
              )
            }
          >
            <img
              src={require("./images/logoWhatsApp.png")}
              alt="WhatsappImage"
            />
          </button>
          <button
            onClick={(e) =>
              openNewTab(e, "https://www.instagram.com/cocoranidosdelcondor/")
            }
          >
            <img
              src={require("./images/logoInstagram.png")}
              alt="InstagramImage"
            />
          </button>
          <button
            onClick={(e) =>
              openNewTab(e, "https://www.facebook.com/Cocoranidosdelcondor")
            }
          >
            <img
              src={require("./images/facebookImage.png")}
              alt="FacebookImage"
            />
          </button>
        </div>
      </div>
      {language === "spanish" ? (
        <p>
          Les damos la bienvenida al glamping{" "}
          <span style={{ fontWeight: "800" }}>Nidos del Condor</span>, el único
          glamping ubicado en la cima del Valle de Cocora. Este es el lugar
          perfecto para esas escapadas de un fin de semana en pareja, para
          sacarse el peso de la ciudad y disfrutar de una experiencia única
          dentro de las montañas del Valle de Cocora.
        </p>
      ) : (
        <p>
          We welcome you to our Glamping{" "}
          <span style={{ fontWeight: "800" }}>Nidos del Cóndor</span>, the only
          glamping located on the top of the Cocora Valley. This is the perfect
          place for those one weekend couple runaways, take this chance to take
          the city's weight of your shoulders and enjoy of this unique
          experience deep inside the Valley's mountains.
        </p>
      )}
      <div className={classes.content}>
        <div className={classes.images}>
          <img
            src={require("./images/glamping18.jpeg")}
            alt="Couldn't charge the image"
            className={classes.firstImg}
          />
          <img
            src={require("./images/glamping21.jpeg")}
            alt="Couldn't charge the image"
            className={classes.secondImg}
          />
        </div>
        <div className={classes.text}>
          <div className={classes.textElement}>
            <img
              src={require("./images/icons8-stars-96.png")}
              alt="Couldn't charge the image"
            />
            <p>
              {language === "spanish"
                ? "Alojamiento de lujo en medio de la naturaleza: Sumérgete en la belleza natural mientras disfrutas de todas las comodidades de un alojamiento de lujo. Nuestras tiendas espaciosas y elegantes te brindarán una experiencia única y acogedora."
                : "Luxury accommodation in the midst of nature: Immerse yourself in the natural beauty while enjoying all the comforts of a luxury accommodation. Our spacious and stylish tents will provide you with a unique and cozy experience."}
            </p>
          </div>
          <div className={classes.textElement}>
            <img
              src={require("./images/icons8-stars-96.png")}
              alt="Couldn't charge the image"
            />
            <p>
              {language === "spanish"
                ? "Experiencias exclusivas: Vive aventuras emocionantes con nuestras actividades personalizadas. Desde caminatas guiadas por senderos naturales hasta fogatas nocturnas bajo las estrellas, cada momento estará lleno de diversión y conexión con la naturaleza."
                : "Exclusive experiences: Embark on thrilling adventures with our customized activities. From guided hikes through natural trails to evening campfires under the stars, every moment will be filled with fun and connection with nature."}
            </p>
          </div>
          <div className={classes.textElement}>
            <img
              src={require("./images/icons8-stars-96.png")}
              alt="Couldn't charge the image"
            />
            <p>
              {language === "spanish"
                ? "Servicio de primera clase: Nuestro equipo dedicado se asegurará de que tu estancia sea perfecta. Desde un servicio personalizado hasta deliciosas comidas preparadas por nuestros chefs, te mimaremos en cada detalle para que disfrutes al máximo de tu escapada al glamping."
                : "First-class service: Our dedicated team will ensure your stay is perfect. From personalized service to delicious meals prepared by our chefs, we will pamper you in every detail so you can fully enjoy your glamping getaway."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Glamping);
