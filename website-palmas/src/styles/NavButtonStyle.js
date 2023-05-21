import sizes from "./sizes";

const style = {
  dropBtn: {
    color: "rgb(199,28,0) !important",
    textDecoration: "none !important",
    fontWeight: "500 !important",
    textTransform: "none",
    borderRadius: "5px",
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
    /* textShadow: "1px 1px 2px #002f05 !important", */
    borderRadius: "5px",
    [sizes.down("md")]: {
      fontSize: "1rem !important",
      marginLeft: "-12px !important",
    },
  },
  link: {
    color: "#000000",
    display: "block",
    fontWeight: "500",
    textDecoration: "none",
    width: "100%",
    fontSize: "28px !important",
    borderRadius: "5px",
    fontFamily: "NewsGothicCondensedBQ",
    /*  textShadow: "1px 1px 2px #FFD9B8", */
    [sizes.down("md")]: {
      fontSize: "1rem",
    },
  },
  menuItem: {
    fontSize: "25px !important",
    width: "100% !important",
  },
  menuItemNoSubServices: {
    fontFamily: "Myriad Pro !important",
    fontSize: "1em !important",
    width: "100% !important",
  },
};

export default style;
