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
    color: "#3c4001",
    backgroundColor: "rgba(116,183,38,0.7)",
    [sizes.down("md")]: {
      display: "block",
    },
  },
  container: {
    textAlign: "center",
    "& h1": {
      [sizes.down("sm")]: {
        fontSize: "3.7rem",
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
      whiteSpace: "normal",
      [sizes.down("md")]: {
        fontSize: "1.2rem",
      },
    },
    [sizes.down("md")]: {
      padding: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
    "& div": {
      [sizes.down("md")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
      },
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
