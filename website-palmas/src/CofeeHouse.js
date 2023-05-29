import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/CofeeHouseStyle";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/CoffeHouseWords";

function CofeeHouse(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title } = words[language];

  return (
    <div className={classes.container}>
      <img
        src={require("./images/Casita del Sabor.png")}
        className={classes.titleImg}
      />

      <div className={classes.content}>
        <div className={classes.images}>
          <img
            className={classes.firstImage}
            src={require("./images/CasitaDelSabor.jpeg")}
            alt="Error: Not found"
          />
          <img
            className={classes.roundedImage}
            src={require("./images/coffee-g169851bf0_1280.jpg")}
            alt="Error: Not found"
          />
        </div>

        <div className={classes.text}>
          {language === "spanish" ? (
            <div>
              <p>
                Sean bienvenidos a la Casita del Sabor, el lugar perfecto para
                pasar el rato después de comer, tomarse un café o incluso
                comerse un postre!
              </p>
              <p>
                En su terraza podrá disfrutar de la naturaleza, el aire fresco y
                de la tranquilidad del campo mientras disfruta de los mejores
                helados acompañados del mejor café de la región.
              </p>
              <p>
                Desde la terraza se tiene una clara vista de la zona de juegos
                para niños, por lo que podrá disfrutar de su postre mientras
                vigila a sus hijos.
              </p>
            </div>
          ) : (
            <p>
              Welcome to our Coffe House! This is the perfect place for you to
              spend some time after eating, to drink a cup of the best coffee of
              the region or even give yourself a treat.
              <br /> <br /> <br />
              In our terrace you can enjoy the nature, the fresh air y the
              tranquility of the countryside while eating some delicious ice
              cream with a cup of coffee.
              <br /> <br /> <br />
              If you have children, you can let them go to the play zone while
              you make sure they are ok from our terrace, where you can have a
              clear view of the play zone.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(CofeeHouse);
