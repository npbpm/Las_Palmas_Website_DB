import sizes from "./sizes";

const style = {
  content: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#F6923D",
    "& p": {
      marginLeft: "10px",
      marginRight: "auto",
      color: "#422711",
      fontSize: "1.5rem",
      fontFamily: "'Bebas Neue', cursive !important",
      borderRadius: "13px",
      padding: "30px",
      lineHeight: "1.9em",
      [sizes.down("md")]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    [sizes.down("md")]: {
      display: "block",
    },
  },
  container: {
    textAlign: "center",
  },
};

export default style;
