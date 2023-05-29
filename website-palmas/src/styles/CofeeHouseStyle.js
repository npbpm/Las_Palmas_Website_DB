import sizes from "./sizes";

const style = {
  content: {
    padding: "120px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "10px",
    marginBottom: "150px",
    [sizes.down("md")]: {
      display: "block",
      padding: 0,
    },
    "& p": {
      marginLeft: "70px",
      marginRight: "30px",
      borderRadius: "13px",
      color: "#000000",
      fontFamily: "Myriad Pro Regular",
      textAlign: "center",
      padding: "30px",
      fontSize: "1.5rem",
      [sizes.down("md")]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  },
  titleImg: {
    maxWidth: "30%",
  },
  container: {
    textAlign: "center",
  },
  text: {
    width: "40%",
    color: "#000000",
    fontFamily: "Myriad Pro Regular",
    "& div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      gap: "80px 0px",
    },
  },
  images: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
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
    bottom: "-300px",
    left: "550px",
  },
};

export default style;
