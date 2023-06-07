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
    [sizes.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
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
      [sizes.down("sm")]: {
        fontSize: "18px",
      },
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
    [sizes.down("us")]: {
      maxWidth: "90%",
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
    [sizes.down("xs")]: {
      width: "80%",
      "& div": {
        gap: "0px",
      },
    },
    [sizes.down("us")]: {
      width: "90%",
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
    [sizes.down("sm")]: {
      justifyContent: "center",
    },
    [sizes.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "80px",
      width: "80%",
    },
    [sizes.down("us")]: {
      width: "90%",
      marginBottom: "60px",
    },
  },
  firstImage: {
    maxWidth: "100%",
    borderRadius: "80px",
    [sizes.down("us")]: {
      borderRadius: "50px",
    },
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
    [sizes.down("sm")]: {
      width: "200px",
      height: "200px",
      bottom: "60px",
      left: "290px",
    },
    [sizes.down("xs")]: {
      bottom: "210px",
      left: "370px",
    },
    [sizes.down("xxs")]: {
      bottom: "290px",
      left: "270px",
    },
    [sizes.down("us")]: {
      width: "150px",
      height: "150px",
      bottom: "370px",
      left: "220px",
    },
  },
};

export default style;
