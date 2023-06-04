import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.css";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/FooterWords";

const openNewTab = (e, url) => {
  e.preventDefault();
  window.open(url, "_blank", "noopener,noreferer");
};

function Footer() {
  const { language } = useContext(LanguageContext);

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
            <img
              src={require("./images/logoInstagram.png")}
              className="logo"
              onClick={(e) =>
                openNewTab(e, "https://www.instagram.com/laspalmasdecocora/")
              }
            />
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
          <ul>
            <li>
              <Link to="/">{home}</Link>
            </li>
            <li>
              <Link to="/who-are-we">{us}</Link>
            </li>
            <li>
              <Link to="/services">{services}</Link>
            </li>
            <li>
              <Link to="/packages-and-sales">{packages}</Link>
            </li>
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
      </div>

      <div className="social-media">
        <p>
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
      </div>
      <div style={{ backgroundColor: "#82BF26", width: "100vw" }}>
        <a
          style={{ textDecoration: "none", color: "#71AE26" }}
          href="https://icons8.com"
        >
          icons8.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
