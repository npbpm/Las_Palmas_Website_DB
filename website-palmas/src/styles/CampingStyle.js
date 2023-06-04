import sizes from "./sizes";

const style = {
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    marginTop: "10px",
    fontFamily: "Myriad Pro Regular",
    fontSize: "24px",
    letterSpacing: "0.1rem",
    textAlign: "left",
    color: "#000000",
    marginBottom: "40px",
    [sizes.down("lg")]: {
      fontSize: "18px",
    },
    [sizes.down("md")]: {
      display: "block",
    },
  },
  titleImg: {
    maxWidth: "30%",
    [sizes.down("lg")]: {
      maxWidth: "45%",
    },
  },
  container: {
    textAlign: "center",
    "& h1": {
      [sizes.down("sm")]: {
        fontSize: "3.7rem",
      },
    },
  },
  list: {
    textAlign: "left",
    "& li": {
      listStyle: "disc",
      marginBottom: "5px",
      whiteSpace: "normal",
      marginLeft: "35px",
      [sizes.down("md")]: {
        fontSize: "1.2rem",
      },
    },
    [sizes.down("md")]: {
      padding: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
    "& div": {
      [sizes.down("md")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
      },
    },
  },
  description: {
    marginRight: "auto",
    marginLeft: "auto",
    padding: "25px",
    width: "40%",
    "& li": {
      textAlign: "left",
    },
    [sizes.down("lg")]: {
      width: "40%",
      marginRight: "0",
      marginLeft: "90px",
    },
    [sizes.down("md")]: {
      marginTop: "20px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  slideContainer: {
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& div": {
      borderRadius: "25px",
    },
    [sizes.down("lg")]: {
      width: "35%",
    },
  },
};

export default style;
