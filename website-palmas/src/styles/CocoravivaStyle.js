import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    height: "auto",
  },
  content: {
    padding: "40px",
    display: "flex",
    backgroundColor: "#F6923D",
    "& img": {
      borderRadius: "13px",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    "& p": {
      marginLeft: "20px",
      marginRight: "auto",
      padding: "20px",
      fontFamily: "'Bebas Neue', cursive !important",
      borderRadius: "13px",
      fontSize: "1.5rem",
      textAlign: "left",
      color: "#422711",
      [sizes.down("md")]: {
        margin: 0,
        marginTop: "40px",
      },
    },
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "10px",
    [sizes.down("md")]: {
      display: "block",
      margin: 0,
      marginTop: "60px",
    },
  },
  collection: {
    backgroundColor: "#422711",
    paddingBottom: "20px",
  },
};

export default style;
