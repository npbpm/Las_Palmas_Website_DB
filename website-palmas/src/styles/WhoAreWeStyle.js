import sizes from "./sizes";

const style = {
  container: {
    width: "100%",
    textAlign: "center",
    "& p": {
      backgroundColor: "transparent",
      fontFamily: "'Bebas Neue', cursive",
      padding: "30px",
    },
  },
  description: {
    marginLeft: 0,
    textAlign: "center",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "10px",
    padding: "40px",
    backgroundColor: "#F6923D",
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
    maxWidth: "100%",
    maxHeight: "100%",
    width: "28%",
    margin: "2px",
    borderRadius: "50%",
    boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
    border: "solid 0.3rem #F6923D",
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
    maxWidth: "100%",
    maxHeight: "100%",
    height: "auto",
    width: "30%",
    marginRight: "80px",
    borderRadius: "13px",
    boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
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
    width: "70%",
    marginRight: "40px",
    fontFamily: "'Bebas Neue', cursive",
    fontSize: "2rem",
    color: "#422711",
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
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgb(131,77,33)",
    marginTop: "50px",
    paddingBottom: "50px",
    "& p": {
      width: "33%",
      fontFamily: "'Bebas Neue', cursive",
      color: "#F6923D",
      fontSize: "1.5rem",
      paddingTop: "15px",
      textAlign: "left",
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
  society: {
    marginTop: "50px",
    [sizes.down("sm")]: {
      marginTop: "25px",
    },
  },
};

export default style;
