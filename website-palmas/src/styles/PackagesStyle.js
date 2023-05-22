import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    height: "auto",
    backgroundColor: "#F2F2F2",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
      borderRadius: "50%",
      width: "250px",
      height: "250px",
      margin: "10px",
      marginBottom: "40px",
      [sizes.down("lg")]: {
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        margin: 0,
        width: "35% !important",
        height: "auto !important",
      },
      [sizes.down("md")]: {
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        margin: 0,
        width: "95% !important",
        height: "auto !important",
      },
    },
    "& p": {
      marginLeft: "auto",
      marginRight: "auto",
      fontFamily: "Roboto",
      fontSize: "24px",
      borderRadius: "13px",
      width: "50%",
      padding: "20px",
    },
    "& ul": {
      fontFamily: "'Bebas Neue', cursive !important",
      fontSize: "1.2rem",
    },
    "& h1": {
      color: "#82BF26",
      fontFamily: "Myriad Pro Bold",
      fontSize: "40px",
      backgroundColor: "#FFFFFF",
      [sizes.down("md")]: {
        fontSize: "5em",
      },
      [sizes.down("us")]: {
        fontSize: "3.4em",
      },
    },
  },
  slides: {
    width: "100%",
    marginBottom: "20px",
    backgroundColor: "#FFFFFF",
  },
  packages: {
    width: "90%",
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "50px",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    [sizes.down("sm")]: {
      display: "block",
      marginTop: "100px",
    },
  },
  package: {
    margin: "5px 28px",
    width: "30%",
    height: "700px",
    backgroundColor: "#CEE6AA",
    borderRadius: "13px",
    paddingTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: "30px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "& h4": {
      fontFamily: "Myriad Pro Bold",
      fontSize: "40px",
      width: "60%",
      marginRight: "auto",
      marginLeft: "auto",
    },
    "& p": {
      color: "#000000",
    },
    "& ul": {
      textAlign: "left",
      color: "#000000",
      marginLeft: "20px",
      [sizes.down("md")]: {
        margin: "0px 10px",
      },
    },
    "&:hover": {
      transform: "scale(1.03)",
      transition: "all 0.4s",
      [sizes.down("md")]: {
        transform: "none",
      },
    },
    [sizes.down("md")]: {
      width: "31%",
    },
    [sizes.down("sm")]: {
      width: "95%",
    },
    "& img": {
      [sizes.down("lg")]: {
        width: "95% !important",
        height: "330px !important",
      },
      [sizes.down("md")]: {
        height: "300px !important",
      },
      [sizes.down("sm")]: {
        height: "670px !important",
      },
      [sizes.down("xs")]: {
        height: "500px !important",
      },
      [sizes.down("xxs")]: {
        height: "400px !important",
      },
      [sizes.down("us")]: {
        height: "290px !important",
      },
    },
  },
  cardtext: {
    // width: "50%",
    height: "500px",
  },
  reserveBtn: {
    padding: "13px 50px",
    borderRadius: "12px",
    backgroundColor: "#FFFFFF",
    textDecoration: "none",
    fontSize: "24px",
    color: "#000000",
    fontFamily: "Myriad Pro Regular",
    "&:hover": {
      backgroundColor: "#F2F2F2",
      transition: "all 0.3s",
    },
  },
};

export default style;
