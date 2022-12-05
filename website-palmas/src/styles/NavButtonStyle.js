import sizes from "./sizes";

const style = {
  dropBtn: {
    color: "#422711 !important",
    textDecoration: "none !important",
    fontWeight: "500 !important",
    /* backgroundColor: "#F6923D !important", */
    textTransform: "none",
    fontFamily: "'Lobster', cursive !important",
    borderRadius: "5px",
    fontFamily: "'Gochi Hand', cursive !important",
    fontSize: "28px !important",
    textShadow: "1px 1px 2px #FFD9B8",
    [sizes.down("md")]: {
      fontSize: "1rem !important",
      marginLeft: "-12px !important",
    },
  },
  dropBtnFooter: {
    color: "#000000 !important",
    textDecoration: "none !important",
    fontWeight: "500 !important",
    fontSize: "1rem !important",
    backgroundColor: "transparent !important",
    textTransform: "none",
    fontFamily: "'Gochi Hand', cursive !important",
    borderRadius: "5px",
    [sizes.down("md")]: {
      fontSize: "1rem !important",
      marginLeft: "-12px !important",
    },
  },
  link: {
    color: "white",
    display: "block",
    fontWeight: "500",
    textDecoration: "none",
    fontFamily: "'Gochi Hand', cursive !important",
    width: "100%",
    fontSize: "28px !important",
    /* backgroundColor: "#F6923D", */
    borderRadius: "5px",
    textShadow: "1px 1px 2px #FFD9B8",
    [sizes.down("md")]: {
      fontSize: "1rem",
    },
  },
  menuItem: {
    fontFamily: "'Gochi Hand', cursive !important",
    fontSize: "25px !important",
    width: "100% !important",
  },
  menuItemNoSubServices: {
    fontFamily: "'Gochi Hand', cursive !important",
    fontSize: "1em !important",
    width: "100% !important",
  },
};

export default style;
