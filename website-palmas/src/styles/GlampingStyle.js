import sizes from "./sizes";

const style = {
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "300px",
    [sizes.down("lg")]: {
      display: "block",
    },
  },
  titleImg: {
    maxWidth: "30%",
  },
  container: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& p": {
      width: "40%",
      padding: "20px",
      fontFamily: "Myriad Pro Regular",
      fontSize: "24px",
      color: "#000000",
      [sizes.down("md")]: {
        marginTop: "20px",
        fontSize: "1.2rem",
        margin: 0,
        width: "100% !important",
        padding: 0,
      },
    },
    "& h1": {
      [sizes.down("us")]: {
        fontSize: "4em",
      },
    },
  },
  contact: {
    paddingTop: "25px",
    paddingBottom: "25px",
    "& button": {
      border: "none",
      backgroundColor: "transparent",
      width: "50px",
      margin: "0px 15px",
      "&:hover": {
        transform: "scale(1.05)",
        transition: "all 0.3s",
        cursor: "pointer",
      },
      "& img": {
        width: "100%",
        borderRadius: "8px",
      },
    },
  },
  images: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: "40%",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "200px 0px",
  },
  firstImg: {
    borderRadius: "50%",
    maxWidth: "100%",
    width: "700px",
    height: "700px",
    objectFit: "cover",
  },
  secondImg: {
    borderRadius: "50%",
    maxWidth: "80%",
    width: "500px",
    height: "500px",
    objectFit: "cover",
    position: "absolute",
    bottom: "-600px",
    right: "820px",
  },
  textElement: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    "& p": {
      fontFamily: "Myriad Pro Regular",
      fontSize: "20px",
      width: "60%",
    },
    "& img": {
      maxWidth: "30%",
    },
  },
};

export default style;
