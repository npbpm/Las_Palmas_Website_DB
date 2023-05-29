import sizes from "./sizes";

const style = {
  content: {
    padding: "10px",
    fontFamily: "Myriad Pro Regular",
    fontSize: "24px",
    display: "flex",
    marginTop: "10px",
    color: "#000000",
    alignItems: "center",
    width: "100%",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
    },
    "& li": {
      marginLeft: "15px",
      listStyle: "disc",
    },
    alignItems: "center",
    justifyContent: "center",
    "& h4": {
      fontSize: "1.7em",
      marginBottom: "20px",
      [sizes.down("md")]: {
        fontSize: "1.3em",
      },
    },
    [sizes.down("md")]: {
      display: "block",
    },
  },
  titleImg: {
    maxWidth: "30%",
  },
  description: {
    padding: "20px",
    width: "55%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [sizes.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "40px",
      "& ul": {
        padding: 0,
        margin: 0,
      },
    },
  },
  container: {
    textAlign: "center",
    "& h1": {
      [sizes.down("md")]: {
        fontSize: "4.4em",
      },
      [sizes.down("us")]: {
        fontSize: "3.8em",
      },
    },
  },
  slideContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "& div": {
      borderRadius: "25px",
    },
  },
};

export default style;
