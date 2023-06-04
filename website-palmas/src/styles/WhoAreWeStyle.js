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
      [sizes.down("xs")]: {
        fontSize: "30px",
      },
    },
  },
  cocoraDesc: {
    fontFamily: "Roboto",
    width: "50%",
    textAlign: "left",
    fontSize: "24px",
    [sizes.down("sm")]: {
      fontSize: "20px",
    },
    [sizes.down("xs")]: {
      fontSize: "15px",
    },
  },
  cocoraImg: {
    maxWidth: "40%",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    [sizes.down("xs")]: {
      height: "250px",
    },
    [sizes.down("xxs")]: {
      height: "210px",
    },
  },
  us: {
    width: "100%",
    "& h1": {
      color: "#82BF26",
      fontSize: "45px",
      fontFamily: "Myriad Pro Bold",
      [sizes.down("xs")]: {
        fontSize: "30px",
        marginTop: "40px",
      },
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
      marginRight: "auto",
      // flexDirection: "column-reverse",
      marginBottom: "50px",
      gap: "0px 40px",
      padding: "0px",
    },
  },
  img: {
    width: "6%",
    margin: "2px",
    [sizes.down("sm")]: {
      borderRadius: "5px",
      width: "20%",
      border: "none",
    },
  },
  imgEntrance: {
    maxWidth: "20%",
    maxHeight: "50%",
    borderRadius: "120px",
    marginRight: "30px",
    [sizes.down("lg")]: {
      borderRadius: "80px",
    },
    [sizes.down("md")]: {
      margin: 0,
      maxWidth: "40%",
    },
    [sizes.down("sm")]: {
      maxWidth: "50%",
    },
    [sizes.down("xs")]: {
      maxWidth: "55%",
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
      fontSize: "24px",
      width: "40%",
    },
    [sizes.down("sm")]: {
      marginTop: "35px",
      fontSize: "20px",
    },
    [sizes.down("xs")]: {
      fontSize: "15px",
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
      [sizes.down("xs")]: {
        fontSize: "15px",
      },
    },
    [sizes.down("md")]: {
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
    [sizes.down("md")]: {
      height: "15rem",
    },
  },
  reviews: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "480px",
    margin: "auto",
    [sizes.down("md")]: {
      height: "400px",
    },
  },
  leftBtn: {
    left: "-2.9rem",
    color: "#D91604",
    "&:hover": {
      cursor: "pointer",
    },
  },
  rightBtn: {
    right: "-2.7rem",
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
    [sizes.down("sm")]: {
      width: "70%",
    },
    [sizes.down("xs")]: {
      fontSize: "18px",
    },
  },
};

export default style;
