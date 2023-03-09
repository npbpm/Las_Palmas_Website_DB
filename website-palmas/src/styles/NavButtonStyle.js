import sizes from "./sizes";

const style = {
  dropBtn: {
    color: "rgb(199,28,0) !important",
    textDecoration: "none !important",
    fontWeight: "500 !important",
    textTransform: "none",
    borderRadius: "5px",
    /* fontFamily: "'Playfair Display', serif !important", */
    fontSize: "28px !important",
    /* textShadow: "1px 1px 2px #FFD9B8", */
    [sizes.down("md")]: {
      fontSize: "1rem !important",
      marginLeft: "-12px !important",
    },
  },
  dropBtnFooter: {
    color: "rgb(116,183,38) !important",
    textDecoration: "none !important",
    fontWeight: "500 !important",
    fontSize: "1rem !important",
    backgroundColor: "transparent !important",
    textTransform: "none",
    /* fontFamily: "'Playfair Display', serif !important", */
    /* textShadow: "1px 1px 2px #002f05 !important", */
    borderRadius: "5px",
    [sizes.down("md")]: {
      fontSize: "1rem !important",
      marginLeft: "-12px !important",
    },
  },
  link: {
    color: "rgb(0,0,0) !important",
    display: "block",
    fontWeight: "500",
    textDecoration: "none",
    /* fontFamily: "'Playfair Display', serif !important", */
    width: "100%",
    fontSize: "28px !important",
    borderRadius: "5px",
    /*  textShadow: "1px 1px 2px #FFD9B8", */
    [sizes.down("md")]: {
      fontSize: "1rem",
    },
  },
  menuItem: {
    /* fontFamily: "'Playfair Display', serif !important", */
    fontSize: "25px !important",
    width: "100% !important",
  },
  menuItemNoSubServices: {
    /* fontFamily: "'Playfair Display', serif !important", */
    fontSize: "1em !important",
    width: "100% !important",
  },
};

export default style;
