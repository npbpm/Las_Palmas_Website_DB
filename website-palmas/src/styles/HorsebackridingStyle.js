import sizes from "./sizes";

const style = {
  content: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
    "& img": {
      borderRadius: "13px",
      objectFit: "cover",
      aspectRatio: 3 / 2,
      [sizes.down("md")]: {
        margin: 0,
      },
    },
    "& p": {
      textAlign: "center",
      fontFamily: "Myriad Pro Regular",
      fontSize: "24px",
      color: "#000000",
      padding: "25px",
      width: "100%",
      [sizes.down("md")]: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "40px",
        padding: "0px",
        // fontSize: "1.8em !important",
        width: "100%",
      },
      [sizes.down("sm")]: {
        fontSize: "1.4em !important",
      },
    },
    [sizes.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
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
  },
  container: {
    textAlign: "center",
  },
  item: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "50%",
    justifyContent: "center",
    marginBottom: "50px",
    marginTop: "20px",
    "& h3": {
      color: "#D31D01",
      fontFamily: "Myriad Pro Regular",
      marginTop: "25px",
    },
    [sizes.down("md")]: {
      width: "80%",
    },
  },
  hikeImg: {
    width: "600px",
    height: "400px",
    [sizes.down("lg")]: {
      width: "400px",
      height: "400px",
    },
    [sizes.down("md")]: {
      width: "300px",
      height: "300px",
    },
    [sizes.down("sm")]: {
      width: "100%",
    },
  },
  horseImg: {
    width: "600px",
    height: "400px",
    [sizes.down("lg")]: {
      width: "400px",
      height: "400px",
    },
    [sizes.down("md")]: {
      width: "300px",
      height: "300px",
    },
    [sizes.down("xs")]: {
      width: "100%",
    },
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    [sizes.down("lg")]: {
      width: "60%",
    },
    [sizes.down("md")]: {
      width: "45%",
    },
    [sizes.down("xs")]: {
      width: "90%",
    },
  },
};

export default style;
