import React from "react";
import "./styles/ServiceCard.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import CabinOutlinedIcon from "@mui/icons-material/CabinOutlined";
import CoffeeIcon from "@mui/icons-material/Coffee";
import FestivalIcon from "@mui/icons-material/Festival";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ForestIcon from "@mui/icons-material/Forest";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import KingBedIcon from "@mui/icons-material/KingBed";
import SpaIcon from "@mui/icons-material/Spa";
import {
  brown,
  amber,
  green,
  purple,
  red,
  lightGreen,
} from "@mui/material/colors";

function ServiceCard(props) {
  const { img, title, description, display, path } = props;

  if (display % 2 === 0) {
    return (
      <div className="service-card">
        <div className="service-card-img">
          <Link to={path}>
            <img
              className="service-card-image"
              src={require(`${img}`)}
              alt="Restaurant"
            />
          </Link>
        </div>
        <div className="service-card-text">
          <Typography variant="h5" className="title">
            {title}
          </Typography>
          <p className="description">
            {description}
            {title === "Restaurante" && (
              <RestaurantIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: red[800],
                }}
                fontSize="inherit"
              />
            )}
            {title === "Restaurant" && (
              <RestaurantIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: red[800],
                }}
                fontSize="inherit"
              />
            )}
            {title === "Vivero Cocora Viva" && (
              <SpaIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: lightGreen[800],
                }}
                fontSize="inherit"
              />
            )}
            {title === "Florist Cocora Viva" && (
              <SpaIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: lightGreen[800],
                }}
                fontSize="inherit"
              />
            )}
            {title === "Hospedaje" && (
              <CabinOutlinedIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: brown[700],
                }}
                fontSize="inherit"
              />
            )}
            {title === "Lodging" && (
              <CabinOutlinedIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: brown[700],
                }}
                fontSize="inherit"
              />
            )}
            {title === "Atracciones" && (
              <SportsSoccerIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                }}
                fontSize="inherit"
              />
            )}
            {title === "Games" && (
              <SportsSoccerIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                }}
                fontSize="inherit"
              />
            )}
            {title === "Artesanías de la región" && (
              <ColorLensIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: purple[800],
                }}
                fontSize="inherit"
              />
            )}
            {title === "Regional Crafts" && (
              <ColorLensIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: purple[800],
                }}
                fontSize="inherit"
              />
            )}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="service-card right">
        <div className="service-card-text">
          <Typography variant="h5" className="title">
            {title}
          </Typography>
          <p className="description">
            {description}
            {title === "Glamping Cocora Nidos del Cóndor" && (
              <KingBedIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                }}
                fontSize="inherit"
              />
            )}
            {title === "Casita del sabor" && (
              <CoffeeIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: brown[600],
                }}
                fontSize="inherit"
              />
            )}
            {title === "Coffee House" && (
              <CoffeeIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: brown[600],
                }}
                fontSize="inherit"
              />
            )}

            {title === "Camping" && (
              <FestivalIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: amber[900],
                }}
                fontSize="inherit"
              />
            )}
            {title === "Paseos Ecológicos a Caballo y Caminatas" && (
              <ForestIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: green[900],
                }}
                fontSize="inherit"
              />
            )}
            {title === "Horse Back Riding" && (
              <ForestIcon
                sx={{
                  transform: "translateY(5px)",
                  marginLeft: "3px",
                  color: green[900],
                }}
                fontSize="inherit"
              />
            )}
          </p>
        </div>
        <div className="service-card-img">
          <Link to={path}>
            <img
              className="service-card-image"
              src={require(`${img}`)}
              alt="Restaurant"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default ServiceCard;
