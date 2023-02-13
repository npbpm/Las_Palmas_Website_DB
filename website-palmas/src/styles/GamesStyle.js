import sizes from "./sizes";

const style = {
  content: {
    padding: "10px",
    fontFamily: "'Bebas Neue', curisve !important",
    fontSize: "1.5rem",
    display: "flex",
    marginTop: "10px",
    color: "#3c4001",
    alignItems: "center",
    backgroundColor: "rgba(116,183,38,0.7)",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
    },
    "& li": {
      marginLeft: "15px",
    },
    alignItems: "center",
    justifyContent: "center",
    "& h4": {
      fontSize: "1.7em",
      marginBottom: "20px",
      [sizes.down("md")]: {
        fontSize: "1.3em",
      },
    },
    [sizes.down("md")]: {
      display: "block",
    },
  },
  description: {
    padding: "20px",
    textAlign: "center",
    borderRadius: "13px",
    marginLeft: "40px",
    [sizes.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "40px",
      "& ul": {
        padding: 0,
        margin: 0,
      },
    },
  },
  container: {
    textAlign: "center",
    "& h1": {
      [sizes.down("md")]: {
        fontSize: "4.4em",
      },
      [sizes.down("us")]: {
        fontSize: "3.8em",
      },
    },
  },
};

export default style;
