import sizes from "./sizes";

const style = {
  content: {
    marginTop: "10px",
    "& img": {
      borderRadius: "5px",
      marginLeft: "10px",
      boxShadow:
        "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      [sizes.down("md")]: {
        margin: 0,
      },
    },
    "& p": {
      textAlign: "left",
      fontFamily: "'Bebas Neue', cusrive !important",
      fontSize: "1.5rem",
      color: "#3c4001",
      borderRadius: "13px",
      padding: "25px",
      width: "60%",
      marginLeft: "20px",
      [sizes.down("md")]: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "40px",
        fontSize: "1.8em !important",
      },
      [sizes.down("sm")]: {
        fontSize: "1.4em !important",
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
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: "50px",
    marginTop: "20px",
    [sizes.down("md")]: {
      display: "block",
    },
  },
  hikeImg: {
    width: "40%",
    maxWidth: "95%",
    [sizes.down("sm")]: {
      width: "100%",
    },
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
    color: "#3c4001 !important",
    [sizes.down("md")]: {
      width: "80% !important",
      padding: "30px !important",
      fontSize: "1.8em !important",
    },
  },
};

export default style;
