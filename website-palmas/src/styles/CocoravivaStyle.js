import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    height: "auto",
  },
  titleImg: {
    maxWidth: "30%",
    [sizes.down("xs")]: {
      maxWidth: "70%",
    },
  },
  content: {
    padding: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "10px",
    "& img": {
      borderRadius: "13px",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    "& p": {
      marginLeft: "auto",
      marginRight: "auto",
      padding: "20px",
      fontFamily: "Myriad Pro Regular",
      borderRadius: "13px",
      fontSize: "24px",
      textAlign: "center",
      color: "#000000",
      width: "40%",
      [sizes.down("md")]: {
        margin: 0,
        width: "70%",
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
