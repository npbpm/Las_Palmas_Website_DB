import sizes from "./sizes";

const style = {
  content: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginTop: "10px",
    fontFamily: "'Bebas Neue', cursive !important",
    fontSize: "1.5rem",
    letterSpacing: "0.1rem",
    color: "#F6923D",
    backgroundColor: "rgb(131,77,33)",
    [sizes.down("md")]: {
      display: "block",
    },
  },
  container: {
    textAlign: "center",
    "& h1": {
      [sizes.down("sm")]: {
        fontSize: "4.7rem",
      },
      [sizes.down("us")]: {
        fontSize: "4rem",
      },
    },
  },
  list: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& li": {
      marginBottom: "5px",
    },
    [sizes.down("md")]: {
      padding: 0,
      margin: 0,
    },
  },
  description: {
    marginRight: "auto",
    borderRadius: "13px",
    marginLeft: "20px",
    padding: "25px",
    "& li": {
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "left",
    },
    [sizes.down("lg")]: {
      width: "60%",
    },
    [sizes.down("md")]: {
      marginTop: "20px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
};

export default style;
