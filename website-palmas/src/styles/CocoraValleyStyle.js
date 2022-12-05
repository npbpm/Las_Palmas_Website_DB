import sizes from "./sizes";

const style = {
  container: {
    display: "flex",
    padding: "10px",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#F6923D",
    [sizes.down("md")]: {
      display: "block",
      paddingLeft: 0,
    },
  },
  images: {
    width: "40%",
    boxShadow:
      "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
    marginRight: "10px",
    borderRadius: "13px",
    [sizes.down("md")]: {
      display: "none",
    },
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  description: {
    width: "59%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "'Bebas Neue', cursive !important",
    color: "#422711",
    lineHeight: "35px",
    padding: "20px",
    borderRadius: "13px",
    fontSize: "1.5rem",
    "& img": {
      display: "none",
      [sizes.down("md")]: {
        display: "block",
        marginTop: "10px",
        marginBottom: "10px",
      },
    },
    [sizes.down("md")]: {
      width: "95%",
      padding: 0,
      marginRight: "auto",
      marginLeft: "auto",
      fontSize: "1.2rem",
      lineHeight: "25px",
    },
  },
};

export default style;
