import sizes from "./sizes";

const style = {
  content: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "rgba(116,183,38,0.7)",
    "& p": {
      marginLeft: "10px",
      marginRight: "auto",
      color: "#3c4001",
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
