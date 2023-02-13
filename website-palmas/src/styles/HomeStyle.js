import sizes from "./sizes";

const style = {
  home: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeBody: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    "& p": {
      marginLeft: "auto",
      marginRight: "auto",
      padding: "20px",
      height: "100%",
      fontSize: "2rem",
      fontFamily: "'Bebas Neue', cursive",
      [sizes.down("md")]: {
        fontSize: "1.2rem",
      },
      [sizes.down("sm")]: {
        fontSize: "1.5rem",
      },
    },
  },
  serviceCards: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
  services: {
    marginTop: "20px",
  },
  location: {
    padding: "25px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    margin: "0 !important",
    marginTop: "5px !important",
    backgroundColor: "rgba(116,183,38,0.7)",
    "& img": {
      boxShadow:
        "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      width: "45%",
      height: "20%",
      [sizes.down("md")]: {
        width: "65%",
      },
      [sizes.down("sm")]: {
        width: "100%",
        height: "300px",
      },
    },
    marginLeft: "20px",
    marginRight: "10px",
    [sizes.down("sm")]: {
      display: "block",
      padding: 0,
    },
  },
};

export default style;
