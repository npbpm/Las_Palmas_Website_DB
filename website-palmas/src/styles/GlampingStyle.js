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
        margin: 0,
        marginTop: "20px",
        width: "100% !important",
        padding: "15px 2px",
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
    borderRadius: "13px",
    [sizes.down("md")]: {
      display: "block",
      justifyContent: "center",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: "70px",
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
