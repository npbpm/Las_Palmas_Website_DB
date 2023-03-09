import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton, Typography } from "@mui/material";
import "./styles/Footer.css";
import { LanguageContext } from "./context/LanguageContext";
import NavButton from "./NavButton";
import words from "./text/FooterWords";

const openNewTab = (e, url) => {
  e.preventDefault();
  window.open(url, "_blank", "noopener,noreferer");
};

function Footer() {
  const { language } = useContext(LanguageContext);

  /* const footerServices = {
    text: words[language].services,
    path: "/services",
    subservices: [
      {
        title: words[language].restaurant,
        path: "/restaurant",
      },
      {
        title: words[language].coffee,
        path: "/cofee-house",
      },
      {
        title: words[language].lodging,
        path: "/lodging",
      },
      {
        title: words[language].camping,
        path: "/camping",
      },
      {
        title: words[language].games,
        path: "/games",
      },
      {
        title: words[language].horse,
        path: "/horseback-riding",
      },
      {
        title: words[language].crafts,
        path: "/regional-crafts",
      },
      {
        title: words[language].glamping,
        path: "/cocora-nidos-del-condor",
      },
      {
        title: words[language].flowers,
        path: "/cocora-viva",
      },
    ],
  }; */

  const {
    access,
    us,
    services,
    home,
    packages,
    reviews,
    contact,
    address,
    developper,
  } = words[language];

  return (
    <footer>
      <div className="footer">
        <div className="leftImages" style={{}}>
          <Link
            to={"/"}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={require("./images/PALMAS_DE_COCORA_LOGO-1-removebg-preview.png")}
              className="palmasLogo"
            />
          </Link>
          <div className="logos">
            {/* <IconButton
              onClick={(e) =>
                openNewTab(e, "https://www.facebook.com/palmasdecocora/")
              }
            >
              <FacebookIcon className="logo" />
            </IconButton> */}
            <img
              src={require("./images/logoInstagram.png")}
              className="logo"
              onClick={(e) =>
                openNewTab(e, "https://www.instagram.com/laspalmasdecocora/")
              }
            />
            {/* <IconButton
              onClick={(e) =>
                openNewTab(
                  e,
                  "https://api.whatsapp.com/send/?phone=573137321738&text&type=phone_number&app_absent=0"
                )
              }
            >
              <WhatsAppIcon className="logo" />
            </IconButton> */}
            <img
              src={require("./images/logoWhatsApp.png")}
              className="logo"
              onClick={(e) =>
                openNewTab(
                  e,
                  "https://api.whatsapp.com/send/?phone=573137321738&text&type=phone_number&app_absent=0"
                )
              }
            />
            {/* <IconButton
              onClick={(e) =>
                openNewTab(e, "https://www.instagram.com/laspalmasdecocora/")
              }
            >
              <InstagramIcon className="logo" />
            </IconButton> */}
            <img
              src={require("./images/logoFacebook.png")}
              className="logo"
              onClick={(e) =>
                openNewTab(e, "https://www.facebook.com/palmasdecocora/")
              }
            />
          </div>
        </div>

        <div>
          {/* <Typography
              variant="h5"
              className="access"
              sx={{ color: "rgb(199, 28, 0)" }}
            >
              {access}
            </Typography> */}
          <ul>
            <li>
              <Link to="/">{home}</Link>
            </li>
            <li>
              <Link to="/who-are-we">{us}</Link>
            </li>
            <li>
              <Link to="/">{services}</Link>
            </li>
            {/* <li>
                <NavButton page={footerServices} isFooter={true} />
              </li> */}
            <li>
              <Link to="/packages-and-sales">{packages}</Link>
            </li>
            {/* <li>
                <Link to="/reviews">{reviews}</Link>
              </li> */}
          </ul>
        </div>
        <ul>
          <li>
            <Link to="/contact-us">{contact}</Link>
          </li>
          <li>
            <h5 to="/contact-us">
              {language === "spanish"
                ? "Abiertos de Lunes a Domingo, de 8am a 7pm"
                : "Open all week, from 8am to 7pm"}
            </h5>
          </li>
        </ul>
        <a
          href="https://www.google.com/search?client=firefox-b-d&sa=X&sxsrf=ALiCzsahgPAlD5SdZC-i4R02AmNiPDM9hA:1667215479376&q=las%20palmas%20de%20cocora&ved=2ahUKEwiW6KXTrYr7AhVRgc4BHRyxBqAQvS56BAgREAE&biw=1920&bih=994&dpr=1&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=13620438303685816251&lqi=ChRsYXMgcGFsbWFzIGRlIGNvY29yYUj615vf7KqAgAhaJhAAEAEQAhADGAAYARgCGAMiFGxhcyBwYWxtYXMgZGUgY29jb3JhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGRIRkVSbU5SRUFF&rlst=f#rlfi=hd:;si:13620438303685816251,l,ChRsYXMgcGFsbWFzIGRlIGNvY29yYUj615vf7KqAgAhaJhAAEAEQAhADGAAYARgCGAMiFGxhcyBwYWxtYXMgZGUgY29jb3JhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGRIRkVSbU5SRUFF;mv:[[4.639404799999999,-75.4798235],[4.635233400000001,-75.5664604]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
          target="_blank"
          rel="noreferrer"
          className="clickableImg"
        >
          <img
            className="mapImg"
            src={require("./images/MapaLasPalmas.PNG")}
            alt="Google Maps Image"
          />
        </a>
        {/* <li className="list-section">
          <div style={{ width: "100%" }}>
             <Typography variant="h5" sx={{ color: "rgb(199, 28, 0)" }}>
              {contact}
            </Typography> 
            <ul>
              <li>
                <span>
                  <PhoneIphoneIcon />
                </span>
                <span>
                  <a href="tel:+573137321738">313 732 1738</a>
                  <span
                    style={{
                      color: "rgb(116,183,38)",
                      textShadow: "1px 1px 2px #002f05",
                    }}
                  >
                    {" "}
                    -{" "}
                  </span>
                  <a href="tel:+573104555400">310 455 5400</a>
                </span>
              </li>
              <li>
                <span>
                  <EmailIcon />
                </span>
                <span>
                  <a href="mailto:info@laspalmasdecocora.com">
                    info@laspalmasdecocora.com
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <IconButton
                    onClick={(e) =>
                      openNewTab(
                        e,
                        "https://www.google.com/search?client=firefox-b-d&sa=X&sxsrf=ALiCzsahgPAlD5SdZC-i4R02AmNiPDM9hA:1667215479376&q=las%20palmas%20de%20cocora&ved=2ahUKEwiW6KXTrYr7AhVRgc4BHRyxBqAQvS56BAgREAE&biw=1920&bih=994&dpr=1&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=13620438303685816251&lqi=ChRsYXMgcGFsbWFzIGRlIGNvY29yYUj615vf7KqAgAhaJhAAEAEQAhADGAAYARgCGAMiFGxhcyBwYWxtYXMgZGUgY29jb3JhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGRIRkVSbU5SRUFF&rlst=f#rlfi=hd:;si:13620438303685816251,l,ChRsYXMgcGFsbWFzIGRlIGNvY29yYUj615vf7KqAgAhaJhAAEAEQAhADGAAYARgCGAMiFGxhcyBwYWxtYXMgZGUgY29jb3JhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGRIRkVSbU5SRUFF;mv:[[4.639404799999999,-75.4798235],[4.635233400000001,-75.5664604]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
                      )
                    }
                    className="positionBtn"
                  >
                    <LocationOnIcon />
                  </IconButton>
                </span>
                <span
                  style={{
                    color: "rgb(116,183,38)",
                    textShadow: "1px 1px 2px #002f05",
                  }}
                >
                  Kilometro 10 Valle de Cocora Salento Quindío, {address}
                </span>
              </li>
            </ul>
          </div>
        </li> */}
      </div>

      <div className="social-media">
        <p>
          {/* <a
            className="developer"
            href="http://www.laspalmasdecocora.com"
            target="_blank"
            rel="noreferrer"
          >
            laspalmasdecocora.com
          </a>
          © 2023 | {developper}{" "} */}
          Desarrollado por:{" "}
          <a
            className="developer"
            href="https://www.linkedin.com/in/nicolas-perez-burbano/"
            target="_blank"
            rel="noreferrer"
          >
            Nicolás Pérez
          </a>
        </p>
        {/* <div className="logos">
          <IconButton
            onClick={(e) =>
              openNewTab(e, "https://www.facebook.com/palmasdecocora/")
            }
          >
            <FacebookIcon className="logo" />
          </IconButton>
          <IconButton
            onClick={(e) =>
              openNewTab(
                e,
                "https://api.whatsapp.com/send/?phone=573137321738&text&type=phone_number&app_absent=0"
              )
            }
          >
            <WhatsAppIcon className="logo" />
          </IconButton>
          <IconButton
            onClick={(e) =>
              openNewTab(e, "https://www.instagram.com/laspalmasdecocora/")
            }
          >
            <InstagramIcon className="logo" />
          </IconButton>
        </div> */}
      </div>
    </footer>
  );
}

/* Free SVG Background by <a target="_blank" href="https://bgjar.com">BGJar</a> */

export default Footer;
