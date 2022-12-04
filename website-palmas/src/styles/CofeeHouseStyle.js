import sizes from "./sizes";

const style = {
  content: {
    padding: "30px",
    display: "flex",
    backgroundColor: "#422711",
    "& img": {
      boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
      borderRadius: "13px",
      maxWidth: "100%",
      maxHeight: "100%",
      width: "90%",
      [sizes.down("xl")]: {
        width: "40%",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      },
      [sizes.down("md")]: {
        width: "90%",
      },
    },
    [sizes.down("md")]: {
      display: "block",
    },
    "& p": {
      marginLeft: "70px",
      marginRight: "30px",
      borderRadius: "13px",
      color: "#A8642A",
      fontFamily: "'Bebas Neue', cursive !important",
      padding: "30px",
      fontSize: "1.5rem",
      textAlign: "left",
      [sizes.down("md")]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    alignItems: "center",
    marginTop: "10px",
  },
  container: {
    textAlign: "center",
  },
};

export default style;
