import sizes from "./sizes";

const styles = {
  "@keyframes float": {
    "0%": {
      boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
      transform: "translatey(0px)",
    },
    "50%": {
      boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
      transform: "translatey(-20px)",
    },
    "100%": {
      boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
      transform: "translatey(0px)",
    },
  },
  container: {
    textAlign: "center",
    "& h1": {
      marginBottom: "30px",
    },
  },
  description: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    backgroundColor: "rgb(131,77,33)",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "49.5%",
    height: "800px",
    borderRadius: "13px",
    [sizes.down("md")]: {
      height: "200px",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    },
  },
  paragraph: {
    width: "60%",
    fontFamily: "'Bebas Neue', cursive",
    color: "#F6923D",
    fontSize: "1.5rem",
    padding: "60px",
    borderRadius: "13px",
    [sizes.down("md")]: {
      padding: "15px",
      fontSize: "1.5em",
    },
    [sizes.down("sm")]: {
      fontSize: "1.2em",
    },
  },
  clickableImg: {
    width: "49.5%",
    filter: "grayscale(100%)",
    [sizes.down("lg")]: {
      filter: "none",
    },
    /* opacity: "0.2", */
    "&:hover": {
      filter: "grayscale(0%)",
      transition: "ease-in-out all 0.3s",
    },
    "& img": {
      [sizes.down("lg")]: {
        animation: "$float 6s ease-in-out infinite",
        transition: "none",
      },
      "&:hover": {
        transform: "scale(1.025)",
        transition: "ease-in-out all 0.3s",
        [sizes.down("lg")]: {
          transform: "none",
        },
      },
    },
  },
};

export default styles;
