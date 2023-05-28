import React, { useState, useContext } from "react";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { send } from "emailjs-com";
import uuid from "react-uuid";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import style from "./styles/ContacStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/ContactWords";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const openNewTab = (e, url) => {
  e.preventDefault();
  window.open(url, "_blank", "noopener,noreferer");
};

function Bookings(props) {
  const { classes } = props;

  const [toSend, setToSend] = useState({
    ContactFormId: uuid(),
    Name: "",
    Email: "",
    Phone: "",
    City: "",
    Message: "",
  });

  const { language } = useContext(LanguageContext);

  const {
    title,
    name,
    email,
    description,
    phone,
    city,
    message,
    sendMessage,
    contact,
    address,
    errName,
    errEmail,
    errPhone,
  } = words[language];

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_oa8nh6n", "template_v6auhov", toSend, "d_teq7CIiSVMxLwaW")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({
      ContactFormId: uuid(),
      Name: "",
      Email: "",
      Phone: "",
      City: "",
      Message: "",
    });
  };

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.content}>
        <div className={classes.form}>
          <h2 className={classes.secondHeader}>
            {language === "spanish" ? "Contáctenos" : "Contact Us"}
          </h2>
          <h4 class={classes.description}>{description}</h4>
          <ValidatorForm onSubmit={handleSubmit}>
            <div style={{ marginLeft: "5px", width: "125%" }}>
              <TextValidator
                autoFocus
                sx={{ width: "80%" }}
                margin="dense"
                id="Name"
                name="Name"
                label={name}
                placeholder="Ex: Rosana Burbano"
                type="text"
                variant="standard"
                onChange={handleChange}
                value={toSend.Name}
                validators={["required"]}
                errorMessages={[errName]}
              />
              <TextValidator
                margin="dense"
                sx={{ width: "80%" }}
                id="Email"
                name="Email"
                label={email}
                placeholder="Ex: sarah@gmail.com"
                type="email"
                variant="standard"
                onChange={handleChange}
                value={toSend.Email}
                validators={["required"]}
                errorMessages={[errEmail]}
              />
              <TextValidator
                margin="dense"
                sx={{ width: "80%" }}
                id="Phone"
                name="Phone"
                label={phone}
                placeholder="Ex: +57 3102548314"
                type="text"
                variant="standard"
                onChange={handleChange}
                value={toSend.Phone}
                validators={["required"]}
                errorMessages={[errPhone]}
              />
              <TextValidator
                margin="dense"
                sx={{ width: "80%" }}
                id="City"
                name="City"
                label={city}
                placeholder="Ex: Bogotá"
                type="text"
                variant="standard"
                onChange={handleChange}
                value={toSend.City}
              />
              <TextValidator
                margin="dense"
                sx={{ width: "80%" }}
                id="Message"
                name="Message"
                label={message}
                multiline
                variant="standard"
                onChange={handleChange}
                value={toSend.Message}
              />
            </div>
            <Button variant="contained" type="submit" fullWidth>
              {sendMessage}
            </Button>
          </ValidatorForm>
          <div className={classes.contactUs}>
            <div className={classes.contactCol}>
              <PhoneInTalkOutlinedIcon />
              <div>
                <h4>WhatsApp</h4>
                <p>313 732 1738 - 310 455 5400</p>
              </div>
            </div>
            <div className={classes.contactCol}>
              <EmailOutlinedIcon />
              <div>
                <h4>E-MAIL</h4>
                <p>info@laspalmasdecocora.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.map}>
          <div className={classes.address}>
            Kilometro 10 Valle de Cocora, Salento Quindío, primer restaurante a
            la izquierda
          </div>
          <a
            href="https://www.google.com/search?client=firefox-b-d&sa=X&sxsrf=ALiCzsahgPAlD5SdZC-i4R02AmNiPDM9hA:1667215479376&q=las%20palmas%20de%20cocora&ved=2ahUKEwiW6KXTrYr7AhVRgc4BHRyxBqAQvS56BAgREAE&biw=1920&bih=994&dpr=1&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=13620438303685816251&lqi=ChRsYXMgcGFsbWFzIGRlIGNvY29yYUj615vf7KqAgAhaJhAAEAEQAhADGAAYARgCGAMiFGxhcyBwYWxtYXMgZGUgY29jb3JhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGRIRkVSbU5SRUFF&rlst=f#rlfi=hd:;si:13620438303685816251,l,ChRsYXMgcGFsbWFzIGRlIGNvY29yYUj615vf7KqAgAhaJhAAEAEQAhADGAAYARgCGAMiFGxhcyBwYWxtYXMgZGUgY29jb3JhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGRIRkVSbU5SRUFF;mv:[[4.639404799999999,-75.4798235],[4.635233400000001,-75.5664604]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Click for Google Maps!"
              src={require(`${"./images/MapaLasPalmas.PNG"}`)}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Bookings);
