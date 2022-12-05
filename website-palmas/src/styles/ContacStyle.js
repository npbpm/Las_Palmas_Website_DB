import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    "& h1": {
      [sizes.down("md")]: {
        fontSize: "5em",
      },
      [sizes.down("us")]: {
        fontSize: "3.8em",
      },
    },
  },
  content: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "70px",
    backgroundColor: "#422711",
    [sizes.down("md")]: {
      display: "block",
      padding: 0,
    },
  },
  contactUs: {
    width: "30%",
    textAlign: "center",
    fontFamily: "'Bebas Neue', cursive !important",
    padding: "30px",
    backgroundColor: "#F6923D",
    "& span": {
      marginRight: "10px",
    },
    [sizes.down("xl")]: {
      width: "40%",
      fontSize: "1.4em",
    },
    [sizes.down("md")]: {
      width: "100%",
      padding: "10px 0",
      marginRight: "auto",
      marginLeft: "auto",
      fontSize: "1em",
    },
  },
  form: {
    padding: "2px",
    width: "20%",
    borderRadius: "13px",
    backgroundColor: "#F6923D",
    "& button": {
      margin: "20px",
      color: "#422711",
      backgroundColor: "#F6923D",
      border: "solid 1px #422711",
    },
    [sizes.down("xl")]: {
      width: "40%",
    },
    [sizes.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "90%",
      marginBottom: "30px",
    },
  },
};

export default style;
