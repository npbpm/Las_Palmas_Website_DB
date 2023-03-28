import React, { useState, useEffect, useContext } from "react";
import { withStyles } from "@mui/styles";
import FormDialog from "./Formdialog";
import PersonIcon from "@mui/icons-material/Person";
import style from "./styles/ReviewsStyle";
import { IconButton, Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import { AuthContext } from "./context/auth/AuthContext";
import axios from "axios";
import Authentication from "./Authentication";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { red } from "@mui/material/colors";
import Loading from "./Loading";

function Reviews(props) {
  const { classes } = props;

  const addOpinion = (opinion) => {
    setOpinions([...opinions, opinion]);

    axios.post("/api/create", opinion);
  };

  const [opinions, setOpinions] = useState([]);

  const [editing, setEditing] = useState(false);

  const [adminValidated, setAdminValidated] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { language } = useContext(LanguageContext);

  const { isAuthenticated, logout } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);

    fetchData();

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      validateAdmin();
    } else {
      setAdminValidated(false);
    }
  }, [isAuthenticated]);

  axios.defaults.baseURL = "http://localhost:3001";

  const fetchData = () => {
    try {
      axios.get("/api/reviews").then(function (response) {
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

  const keyDownHandler = (event) => {
    if (event.key === "e" && event.ctrlKey) {
      event.preventDefault();
      setEditing(true);
    }
    if (event.key === "q" && event.ctrlKey) {
      event.preventDefault();
      setEditing(false);
      setAdminValidated(false);
      logout();
    }
  };

  const validateAdmin = () => {
    setAdminValidated(true);
  };

  const handleClick = (id) => {
    try {
      console.log(id);
      if (isAuthenticated) {
        axios.delete(`/api/delete/${id}`);
        alert("Review deleted");
      } else {
        console.log("No admin connected");
      }
    } catch (error) {
      console.log("ERROR");
    }
    fetchData();
  };

  return (
    <div className={classes.container}>
      <Typography variant="h1">
        {language === "spanish" ? "Testimonios" : "Reviews"}
      </Typography>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={classes.content}>
          <div className={classes.opinions}>
            {opinions.map((opinion, idx) => (
              <div className={classes.opinion} key={idx}>
                {adminValidated && (
                  <IconButton
                    sx={{ position: "relative", top: 2, left: "+49%" }}
                    onClick={() => handleClick(opinion._id)}
                  >
                    <HighlightOffIcon
                      sx={{ color: red[700], fontSize: "1.5em" }}
                    />
                  </IconButton>
                )}

                <p style={{ fontStyle: "italic" }}>{opinion.message}</p>
                <div style={{ display: "flex", color: "black" }}>
                  <PersonIcon />
                  {opinion.name !== ""
                    ? opinion.name
                    : language === "spanish"
                    ? "ANONIMO"
                    : "ANONYMOUS"}
                </div>
              </div>
            ))}
          </div>
          <div className={classes.formBtns}>
            <FormDialog addOpinion={addOpinion} />
            {editing && <Authentication validateAdmin={validateAdmin} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default withStyles(style)(Reviews);
