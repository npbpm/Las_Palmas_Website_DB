import sizes from "./sizes";

const style = {
  content: {
    padding: "120px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "10px",
    marginBottom: "250px",
    [sizes.down("lg")]: {
      marginBottom: "40px",
    },
    [sizes.down("md")]: {
      justifyContent: "space-between",
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
    [sizes.down("lg")]: {
      maxWidth: "45%",
    },
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
    [sizes.down("lg")]: {
      "& div": {
        gap: "20px 0px",
      },
    },
  },
  images: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    [sizes.down("lg")]: {
      width: "60%",
    },
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
    [sizes.down("xl")]: {
      bottom: "-320px",
      left: "430px",
    },
    [sizes.down("lg")]: {
      width: "400px",
      height: "400px",
      bottom: "-220px",
      left: "400px",
    },
    [sizes.down("md")]: {
      width: "300px",
      height: "300px",
      bottom: "-50px",
      left: "340px",
    },
  },
};

export default style;
