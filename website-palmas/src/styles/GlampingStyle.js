import sizes from "./sizes";

const style = {
  content: {
    marginTop: "10px",
    marginRight: "0",
    marginLeft: "0",
    [sizes.down("lg")]: {
      display: "block",
    },
  },
  firstText: {
    paddingTop: "50px",
    paddingBottom: "50px",
    width: "100%",
    paddingLeft: "20px",
    [sizes.down("md")]: {
      padding: 0,
      paddingTop: "10px",
      paddingBottom: "5px",
    },
  },
  container: {
    textAlign: "center",
    "& p": {
      marginLeft: "20px",
      padding: "20px",
      fontFamily: "'Bebas Neue', cursive !important",
      borderRadius: "13px",
      fontSize: "1.5rem",
      color: "#F6923D",
      [sizes.down("md")]: {
        marginTop: "20px",
        fontSize: "1.2rem",
        margin: 0,
        width: "100% !important",
        padding: 0,
      },
    },
    "& h1": {
      [sizes.down("us")]: {
        fontSize: "4em",
      },
    },
  },
  intro: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    [sizes.down("md")]: {
      display: "block",
      justifyContent: "center",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: "70px",
    },
  },
  insideIntro: {
    padding: "5px",
    textAlign: "center",
    [sizes.down("md")]: {
      padding: 0,
    },
  },
  contact: {
    paddingTop: "25px",
    paddingBottom: "25px",
    backgroundColor: "#A8642A",
    "& button": {
      "& svg": {
        "&:hover": {
          color: "rgb(68, 168, 68)",
          transition: "ease-in-out all 0.3s",
        },
      },
    },
  },
};

export default style;
