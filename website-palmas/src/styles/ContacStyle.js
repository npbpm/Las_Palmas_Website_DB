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
    backgroundColor: "rgba(116,183,38,0.7)",
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
    backgroundColor: "#b8e29f",
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
    backgroundColor: "#b8e29f",
    "& button": {
      margin: "20px",
      color: "#b8e29f",
      backgroundColor: "#3c4001",
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
