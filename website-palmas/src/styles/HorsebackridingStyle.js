import sizes from "./sizes";

const style = {
  content: {
    padding: "10px",
    marginTop: "100px",
    "& img": {
      borderRadius: "5px",
      maxWidth: "100%",
      maxHeight: "100%",
      boxShadow:
        "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    },
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      textAlign: "left",
      backgroundColor: "#eeeeee",
      fontFamily: "'Libre Baskerville', serif !important",
      borderRadius: "13px",
      padding: "25px",
      width: "60%",
      marginLeft: "20px",
      fontSize: "1.2em",
      [sizes.down("md")]: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "40px",
        fontSize: "1em",
      },
    },
    [sizes.down("md")]: {
      display: "block",
    },
  },
  container: {
    textAlign: "center",
    "& h1": {
      [sizes.down("us")]: {
        fontSize: "4em",
      },
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: "50px",
    marginTop: "20px",
    [sizes.down("md")]: {
      display: "block",
    },
  },
  hikeImg: {
    width: "95%",
  },
  horseImg: {
    height: "50%",
    width: "45%",
    [sizes.down("md")]: {
      width: "95%",
    },
  },
  horseText: {
    width: "30% !important",
    [sizes.down("md")]: {
      width: "80% !important",
      padding: "30px !important",
    },
  },
};

export default style;
