import sizes from "./sizes";

const style = {
  container: {
    width: "100%",
    textAlign: "center",
    "& p": {
      backgroundColor: "transparent",
      fontFamily: "Roboto",
      fontWeight: "500",
    },
  },
  cocoraValley: {
    "& div": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    "& h1": {
      color: "#82BF26",
      fontSize: "45px",
      fontFamily: "Myriad Pro Bold",
    },
  },
  cocoraDesc: {
    fontFamily: "Roboto",
    width: "50%",
    textAlign: "left",
    fontSize: "24px",
  },
  cocoraImg: {
    maxWidth: "40%",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
  },
  us: {
    width: "100%",
    "& h1": {
      color: "#82BF26",
      fontSize: "45px",
      fontFamily: "Myriad Pro Bold",
    },
  },
  description: {
    marginLeft: 0,
    textAlign: "left",
    fontSize: "24px",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "10px",
    padding: "40px",
    [sizes.down("md")]: {
      width: "95%",
      justifyContent: "space-between",
      marginLeft: "-10px",
    },
    [sizes.down("sm")]: {
      width: "80%",
      marginLeft: "auto",
      flexDirection: "column-reverse",
      marginBottom: "50px",
    },
  },
  img: {
    width: "6%",
    margin: "2px",
    [sizes.down("md")]: {
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    },
    [sizes.down("sm")]: {
      borderRadius: "5px",
      width: "70%",
      border: "none",
    },
  },
  imgEntrance: {
    maxWidth: "20%",
    maxHeight: "50%",
    borderRadius: "120px",
    marginRight: "30px",
    [sizes.down("md")]: {
      margin: 0,
      width: "25rem",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    },
    [sizes.down("sm")]: {
      width: "35rem",
    },
  },
  imgCertificate: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "25em",
    width: "100",
    [sizes.down("sm")]: {
      width: "98%",
      height: "auto",
    },
  },
  paragraphHistory: {
    width: "60%",
    fontSize: "24px",
    color: "#000000",
    paddingTop: "15px",
    textAlign: "left",
    [sizes.down("md")]: {
      margin: 0,
      fontSize: "1.3em",
      width: "40%",
    },
    [sizes.down("sm")]: {
      marginTop: "35px",
      width: "95%",
    },
  },
  history: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    "& p": {
      width: "auto",
      fontFamily: "Roboto",
      color: "#466421",
      fontSize: "24px",
      paddingTop: "15px",
      textAlign: "center",
      margin: "0 10px",
      [sizes.down("md")]: {
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "1.3em",

        padding: "15px",
      },
    },
    [sizes.down("md")]: {
      display: "block",
      marginTop: "25px",
    },
  },
  cardContainer: {
    position: "relative",
    width: "36rem",
    height: "22rem",
    "& svg": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-90%)",
      fontSize: "3rem",
    },
  },
  reviews: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "480px",
    margin: "auto",
  },
  leftBtn: {
    left: "-2.9rem",
    color: "#D91604",
    "&:hover": {
      cursor: "pointer",
    },
  },
  rightBtn: {
    right: "-4.5rem",
    color: "#D91604",
    "&:hover": {
      cursor: "pointer",
    },
  },
  ecoFooter: {
    textAlign: "center",
    fontSize: "24px",
    fontFamily: "Roboto !important",
    fontStyle: "italic",
    fontWeight: "700 !important",
    width: "50%",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "50px",
  },
};

export default style;
