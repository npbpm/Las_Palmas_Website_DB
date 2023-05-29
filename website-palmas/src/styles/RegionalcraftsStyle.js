import sizes from "./sizes";

const style = {
  content: {
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    paddingBottom: "40px",
    alignItems: "center",
    justifyContent: "space-around",
    height: "800px",
    marginBottom: "150px",
    "& p": {
      width: "100%",
      fontFamily: "Myriad Pro Regular",
      borderRadius: "13px",
      color: "#000000",
      fontSize: "24px",
      [sizes.down("md")]: {
        width: "90%",
      },
      [sizes.down("us")]: {
        width: "85%",
      },
    },
    [sizes.down("md")]: {
      display: "block",
      marginTop: "60px",
      padding: 0,
      paddingTop: "20px",
    },
  },
  titleImg: {
    maxWidth: "30%",
  },
  container: {
    textAlign: "center",
    "& h1": {
      [sizes.down("sm")]: {
        fontSize: "3em",
      },
    },
  },
  text: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: "45%",
    alignSelf: "strech",
  },
  firstImage: {
    maxWidth: "100%",
    borderRadius: "80px",
  },
  roundedImage: {
    borderRadius: "50%",
    width: "500px",
    height: "500px",
    position: "absolute",
    bottom: "-310px",
    left: "550px",
  },
};

export default style;
