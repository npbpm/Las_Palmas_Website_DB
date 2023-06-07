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
      justifyContent: "space-between",
    },
    [sizes.down("sm")]: {
      flexDirection: "column",
    },
  },
  titleImg: {
    maxWidth: "30%",
    [sizes.down("lg")]: {
      maxWidth: "45%",
    },
    [sizes.down("xs")]: {
      maxWidth: "70%",
    },
    [sizes.down("us")]: {
      maxWidth: "90%",
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
      marginLeft: "0",
      marginRight: "0",
    },
    [sizes.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "70%",
    },
    [sizes.down("us")]: {
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "0px",
      paddingRight: "0px",
      width: "90%",
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
    [sizes.down("md")]: {
      width: "50%",
      "& div": {
        width: "450px",
      },
    },
    [sizes.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    [sizes.down("xs")]: {
      marginLeft: "0px",
      marginRight: "0px",
      width: "100%",
      "& div": {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    [sizes.down("us")]: {
      "& div": {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  },
};

export default style;
