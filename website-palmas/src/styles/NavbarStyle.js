const style = {
  logo: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "6em",
  },
  langFlag: {
    width: "40px",
    "& img": {
      maxWidth: "100%",
      height: "40px",
      borderRadius: "50%",
      "&:hover": {
        cursor: "pointer",
        transform: "scale(1.09)",
        transition: "linear all 0.2s",
      },
    },
  },
};
export default style;
