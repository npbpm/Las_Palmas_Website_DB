import sizes from "./sizes";

const style = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    marginTop: "10px",
    width: "60%",
    "& p": {
      marginLeft: "10px",
      marginRight: "auto",
      color: "#000000",
      fontSize: "24px",
      fontFamily: "Myriad Pro Regular",
      padding: "30px",
      [sizes.down("md")]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    [sizes.down("lg")]: {
      width: "75%",
    },
    [sizes.down("md")]: {
      display: "block",
    },
  },
  container: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titleImg: {
    maxWidth: "30%",
    marginBottom: "80px",
    [sizes.down("lg")]: {
      maxWidth: "45%",
    },
  },
  slideContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default style;
