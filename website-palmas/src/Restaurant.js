import React, { useContext, useState } from "react";
import { withStyles } from "@mui/styles";
import Menu from "./images/Menu.pdf";
import style from "./styles/RestaurantStyle";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/RestaurantWords";

const slideImages = [
  {
    url: "./images/AtardercerPalmas.jpeg",
  },
  {
    url: "./images/Who-are-we.jpeg",
  },
  {
    url: "./images/FrontRestaurant.jpeg",
  },
  {
    url: "./images/FrenteRestaurante.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.37 PM.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.43 PM.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.37 PM(1).jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.40 PM.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.45 PM.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.45 PM(1).jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.45 PM(2).jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.45 PM(3).jpeg",
  },
  {
    url: "./images/platoEntero.jpeg",
  },
  {
    url: "./images/postre.jpeg",
  },
];

function Restaurant(props) {
  const { classes } = props;

  const [clickedCardR, setClickedCardR] = useState(false);
  const [clickedCardN, setClickedCardN] = useState(false);
  const [clickedCardF, setClickedCardF] = useState(false);

  const flipCardR = (e) => {
    e.stopPropagation();
    setClickedCardR(!clickedCardR);
    console.log(clickedCardR);
  };

  const flipCardN = (e) => {
    e.stopPropagation();
    setClickedCardN(!clickedCardN);
  };

  const flipCardF = (e) => {
    e.stopPropagation();
    setClickedCardF(!clickedCardF);
  };

  const { language } = useContext(LanguageContext);

  const {
    title,
    description,
    menuTitle,
    menu,
    ambientTitle,
    romantic,
    romanticText,
    nature,
    natureText,
    cultural,
    culturalText,
  } = words[language];

  return (
    <div className={classes.container}>
      <img
        src={require("./images/Restaurante.png")}
        className={classes.titleImg}
      />
      <p className={classes.subtitle}>{description}</p>
      <div className={classes.content}>
        <div className={classes.presentation}>
          <div className={classes.images}>
            <img
              src={require("./images/FrenteEnteroRestaurante.jpeg")}
              className={classes.restaurantImg}
            />
            <img
              src={require("./images/WhatsApp Image 2022-10-02 at 11.50.45 PM(3).jpeg")}
              className={classes.dessertImg}
            />
          </div>
          <div className={classes.menu}>
            <a
              className={classes.menuItem}
              href={Menu}
              target="_ blank"
              rel="noreferrer"
            >
              <img
                src={require("./images/menu.png")}
                className={classes.menuImg}
              />
            </a>
            <p className={classes.menuText}>
              {menuTitle}{" "}
              <a
                className={classes.menuItem}
                href={Menu}
                target="_ blank"
                rel="noreferrer"
              >
                {menu}
              </a>
            </p>
          </div>
        </div>
        <div className={classes.ambients}>
          <h2 className={classes.ambientTitle}>{ambientTitle}</h2>
          <div className={classes.ambientCards}>
            <div className={classes.ambientCard}>
              <div
                className={
                  clickedCardR
                    ? classes.flippedCardInner
                    : classes.ambientCardInner
                }
              >
                <div
                  className={classes.ambientCardFront}
                  style={{
                    backgroundColor: "#F4AFAF",
                  }}
                >
                  {clickedCardR ? (
                    <div className={classes.backInner}>
                      <button
                        className={classes.closeIcon}
                        onClick={(e) => {
                          flipCardR(e);
                        }}
                      >
                        <img
                          src={require("./images/cerrar-simbolo-de-boton-circular.png")}
                        />
                      </button>
                      <p className={classes.backText}>{romanticText}</p>
                      <img src={require("./images/amor_de_luna.jpeg")} />
                    </div>
                  ) : (
                    <div className={classes.frontInner}>
                      <img
                        src={require("./images/bebidas.png")}
                        className={classes.cardLogo}
                      />
                      <h3>{romantic}</h3>
                      <button
                        className={classes.reserveBtn}
                        onClick={(e) => {
                          flipCardR(e);
                        }}
                      >
                        {language === "spanish" ? "Ver más" : "See more"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={classes.ambientCard}>
              <div
                className={
                  clickedCardN
                    ? classes.flippedCardInner
                    : classes.ambientCardInner
                }
              >
                <div
                  className={classes.ambientCardFront}
                  style={{
                    backgroundColor: "#14AE5C",
                  }}
                >
                  {clickedCardN ? (
                    <div className={classes.backInner}>
                      <button
                        className={classes.closeIcon}
                        onClick={(e) => {
                          flipCardN(e);
                        }}
                      >
                        <img
                          src={require("./images/cerrar-simbolo-de-boton-circular.png")}
                        />
                      </button>
                      <p className={classes.backText}>{natureText}</p>
                      <img src={require("./images/glamping22.jpeg")} />
                    </div>
                  ) : (
                    <div className={classes.frontInner}>
                      <img
                        src={require("./images/brote.png")}
                        className={classes.cardLogo}
                      />
                      <h3>{nature}</h3>
                      <button
                        className={classes.reserveBtn}
                        onClick={(e) => {
                          flipCardN(e);
                        }}
                      >
                        {language === "spanish" ? "Ver más" : "See more"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={classes.ambientCard}>
              <div
                className={
                  clickedCardF
                    ? classes.flippedCardInner
                    : classes.ambientCardInner
                }
              >
                <div
                  className={classes.ambientCardFront}
                  style={{
                    backgroundColor: "#FFCD29",
                  }}
                >
                  {clickedCardF ? (
                    <div className={classes.backInner}>
                      <button
                        className={classes.closeIcon}
                        onClick={(e) => {
                          flipCardF(e);
                        }}
                      >
                        <img
                          src={require("./images/cerrar-simbolo-de-boton-circular.png")}
                        />
                      </button>
                      <p className={classes.backText}>{romanticText}</p>
                      <img
                        src={require("./images/WhatsApp Image 2022-10-02 at 11.50.37 PM.jpeg")}
                      />
                    </div>
                  ) : (
                    <div className={classes.frontInner}>
                      <img
                        src={require("./images/cafe.png")}
                        className={classes.cardLogo}
                      />
                      <h3>{romantic}</h3>
                      <button
                        className={classes.reserveBtn}
                        onClick={(e) => {
                          flipCardF(e);
                        }}
                      >
                        {language === "spanish" ? "Ver más" : "See more"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Restaurant);
