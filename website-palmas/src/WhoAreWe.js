import React, { useContext, useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/WhoAreWeStyle";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/WhoAreWeWords";
import Review from "./Review";
import Paginator from "./Paginator";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";

function WhoAreWe(props) {
  const { classes } = props;

  const [index, setIndex] = useState(0);

  const [opinions, setOpinions] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= opinions.length - 1) {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    fetchData();
  }, []);

  //NEEDS TO BE CHANGED BEFORE DEPLOYMENT
  axios.defaults.baseURL = "http://localhost:3001";

  const fetchData = async () => {
    try {
      await axios.get("/api/reviews").then(function (response) {
        setOpinions(response.data);
      });
    } catch {
      const defaultReviews = [
        {
          name: "Clara Arenas",
          evaluation: 5,
          message:
            "Una magnifica oportunidad para deleitarse con la vida y conmerar momentos inolvidables. Dios les bendiga, y en Cocora a insistir, persistir, resistir y nunca desistir!!! La humanidad ha de atesorar todos sus esfuerzos y las proximas generaciones lo agradeceran!!!",
        },
        {
          name: "Andrés Felipe",
          evaluation: 4,
          message:
            "Todo excelente, un lugar para volver definitivamente. No se sabe que es mejor, si el servicio o la comida.",
        },
        {
          name: "Jorge Pelaez",
          evaluation: 5,
          message: "Genial lugar. Todo excelente. ",
        },
        {
          name: "Carolina Manzur",
          evaluation: 5,
          message:
            "Me encanta, volvería un millón de veces. Es un lugar espectacular y la atención aún más. Sus productos y atención al cliente son algo sorprendente. Incluso cuando están atareados, siempre se preocupan por dar la mejor atención y el mejor servicio. Gracias. ",
        },
        {
          name: "Camila Rey",
          evaluation: 3,
          message:
            "Hermoso lugar, excelente servicio. Experiencia inimaginable. Para repetir absolutamente. De ir al Valle del Cocora hay que ir a este lugar en especial.",
        },
        {
          name: "César Augusto y Liliana",
          evaluation: 5,
          message:
            "Hermoso lugar. Un paraiso en el Quindío. Inmensamente agradecidos con la excelente atención por parte de las personas que atienden en este maravilloso sitio. Gracias Carmenza, gracias Mario, gracias Jorge y gracias Angie. Hasta una próxima oportunidad. Dios les pague.",
        },
        {
          name: "Marcela Pinedo",
          evaluation: 5,
          message:
            "Un excelente lugar, la comida deliciosa, el servicio muy bueno... un lugar maravilloso que vale la pena conocer. recomendado ",
        },
        {
          name: "M&JP",
          evaluation: 5,
          message:
            "Estuvimos en la zona de camping el 1 y 2 de enero de 2015. Tiene muy bien adecuada la zona de montaje de carpas y de fogatas. El desayuno estuvo muy rico, el ambiente es muy agradable. La atención de todo el personal es excelente. Lugar muy recomendado y volveremos. M&JP; by www.bitacoradeviajes.co",
        },
        {
          name: "",
          evaluation: 5,
          message:
            "Gran calidez y atención. Nos alegra mucho que nuestro evento haya sido un exito por sus servicios. Muchas gracias Alba.",
        },
        {
          name: "Fernando Parra",
          evaluation: 5,
          message: "Grandioso lugar con excelente servicio",
        },
      ];
      setOpinions(defaultReviews);
    }
    setIsLoading(false);
  };

  const { language } = useContext(LanguageContext);

  const { title, history, societies } = words[language];

  return (
    <div className={classes.container}>
      <div className={classes.cocoraValley}>
        <h1>{language === "spanish" ? "VALLE DE COCORA" : "COCORA VALLEY"}</h1>
        <div>
          {language === "spanish" ? (
            <p className={classes.cocoraDesc}>
              El valle de Cocora es un paisaje natural localizado en la
              cordillera central de los Andes colombianos, específicamente en el
              departamento del Quindío, en el área de influencia del Parque
              nacional natural Los Nevados. Cuenta con algunas poblaciones del
              árbol nacional de Colombia, la palma de cera del Quindío
              (Ceroxylon quindiuense), así como de una gran variedad de flora y
              fauna, mucha de ella en peligro de extinción, protegida bajo el
              estatus de parque nacional natural. El valle, así como la
              localidad cercana de Salento, se ubican entre los principales
              destinos turísticos de Colombia
            </p>
          ) : (
            <p className={classes.cocoraDesc}>
              The Cocora Valley is a natural landscape located in the central
              mountain range of the Colombian Andes, specifically in the
              department of Quindío, within the influence area of Los Nevados
              National Natural Park. It is home to several populations of
              Colombia's national tree, the Quindío wax palm (Ceroxylon
              quindiuense), as well as a wide variety of flora and fauna, much
              of which is endangered and protected under the status of a
              national natural park. The valley, along with the nearby town of
              Salento, is among the main tourist destinations in Colombia.
            </p>
          )}
          <img
            className={classes.cocoraImg}
            src={require("./images/valley-ge1efec97d_1920.jpg")}
          />
        </div>
      </div>

      <div className={classes.us}>
        <h1>{language === "spanish" ? "NOSOTROS" : "US"}</h1>
        <div className={classes.description}>
          <img
            className={classes.imgEntrance}
            src={require("./images/MariaTYAlberto.jpeg")}
            alt="Not found"
          />
          {language === "spanish" ? (
            <p className={classes.paragraphHistory}>
              Tenemos el orgullo de decir que somos el primer restaurante en el
              Valle de Cocora, gestores de la corriente turística hacia la
              región con una tradición de más de 45 años en el departamento del
              Quindío.
              <br />
              <br />
              Desde sus inicios, Las Palmas de Cocora han sido un restaurante
              familiar, fundado hace más de 45 años por el ganadero Alberto
              Pérez Puerta y su esposa Maria Teresa Puerta Montoya. Fuimos el
              primer restaurante que apareció en el Valle de Cocora impulsando
              así el turismo y el desarrollo de la región. Hemos sido durante
              años un negocio familiar, preocupandonos por hacer que cada quién
              se sienta como en su casa
              <br />
            </p>
          ) : (
            <p className={classes.paragraphHistory}>
              We are proud to say that we are the first restaurant in the Cocora
              Valley, we are pioneers in the region tourism with more than 45
              years of tradition in the department of El Quindío
              <br />
              <br />
              Since its beginnings, Las Palmas de Cocora has been a family
              restaurant, founded over 45 years ago by cattle rancher Alberto
              Pérez Puerta and his wife Maria Teresa Puerta Montoya. We were the
              first restaurant to appear in the Cocora Valley, thus promoting
              tourism and the development of the region. We have been a family
              business for years, so we care about making everyone feel at home.
            </p>
          )}
        </div>
      </div>

      <div style={{ backgroundColor: "#82BF2660" }}>
        <div className={classes.history}>
          <img
            className={classes.img}
            src={require("./images/Google_Maps_Logo_2020.svg.png")}
            alt="img Not found"
          />
          {language === "spanish" ? (
            <p>
              El Restaurante está ubicado en el km 10 del Valle de Cocora.
              <br />
              A 15 minutos desde salento, somos el primer restaurante a su
              izquierda
              <br />
              Si no cuentan con vehículo personal, siempre pueden optar por los
              jeeps que suben al valle,
              <br />
              estos los dejaran justo en al entrada del restaurante.
            </p>
          ) : (
            <p>
              The restaurant is located at kilometer 10 of the Cocora Valley.
              <br />
              It is a 15-minute drive from Salento, and we are the first
              restaurant on your left.
              <br />
              If you don't have your own vehicle, you can always opt for the
              jeeps that go up to the valley.
              <br />
              These jeeps will drop you off right at the entrance of the
              restaurant.
            </p>
          )}
        </div>
      </div>

      <div className={classes.reviews}>
        <div className={classes.cardContainer}>
          <Paginator dataLength={opinions.length} activeIndex={index} />
          <ChevronLeftIcon onClick={slideLeft} className={classes.leftBtn} />
          <ChevronRightIcon onClick={slideRight} className={classes.rightBtn} />
          {opinions.map((review, n) => {
            let position =
              n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
            return <Review {...review} cardStyle={position} />;
          })}
        </div>
      </div>

      <div>
        {language === "spanish" ? (
          <p className={classes.ecoFooter}>
            Todos nuestros esfuerzos siempre han sido y siempre serán para hacer
            de este un lugar acogedor y poder pasar un momento en familia
            impregnandose de la naturaleza y de la hermosura del Valle, causando
            el menor impacto en el medio ambiente
          </p>
        ) : (
          <p className={classes.ecoFooter}>
            All our efforts have always been and will always be aimed at making
            this a welcoming place where families can spend time, immersing
            themselves in nature and the beauty of the valley while causing the
            least possible impact on the environment.
          </p>
        )}
      </div>
    </div>
  );
}

export default withStyles(style)(WhoAreWe);
