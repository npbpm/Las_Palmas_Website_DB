import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    "& h1": {
      [sizes.down("us")]: {
        fontSize: "4em",
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
    backgroundColor: "#422711",
    padding: "70px",
    [sizes.down("md")]: {
      display: "block",
      width: "95%",
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
      fontSize: "0.95em",
    },
    [sizes.down("md")]: {
      width: "100%",
      padding: "10px 0",
      marginRight: "auto",
      marginLeft: "auto",
    },
    [sizes.down("us")]: {
      fontSize: "0.6em",
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
