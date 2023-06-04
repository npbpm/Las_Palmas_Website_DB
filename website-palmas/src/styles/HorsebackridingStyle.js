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
  titleImg: {
    maxWidth: "30%",
    [sizes.down("lg")]: {
      maxWidth: "45%",
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
    flexDirection: "column",
    width: "50%",
    justifyContent: "center",
    marginBottom: "50px",
    marginTop: "20px",
    [sizes.down("md")]: {
      display: "block",
    },
    "& h3": {
      color: "#D31D01",
      fontFamily: "Myriad Pro Regular",
      marginTop: "25px",
    },
  },
  hikeImg: {
    width: "600px",
    height: "400px",
    [sizes.down("lg")]: {
      width: "400px",
      height: "400px",
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
      width: "95%",
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
  },
};

export default style;
