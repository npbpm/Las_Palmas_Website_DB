import sizes from "./sizes";

const style = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    marginTop: "10px",
    width: "60%",
    "& p": {
      marginLeft: "10px",
      marginRight: "auto",
      color: "#000000",
      fontSize: "24px",
      fontFamily: "Myriad Pro Regular",
      padding: "30px",
      [sizes.down("md")]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
      [sizes.down("sm")]: {
        padding: "20px 5px",
      },
      [sizes.down("xs")]: {
        fontSize: "20px",
        "& p": {
          fontSize: "17px",
        },
      },
      [sizes.down("xxs")]: {
        fontSize: "18px",
        "& p": {
          fontSize: "13px",
        },
      },
      [sizes.down("us")]: {
        "& img": {
          "&:last-child": {
            display: "none",
          },
        },
      },
    },
    [sizes.down("lg")]: {
      width: "75%",
    },
    [sizes.down("md")]: {
      width: "90%",
    },
    [sizes.down("sm")]: {
      width: "100%",
    },
  },
  container: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titleImg: {
    maxWidth: "30%",
    marginBottom: "80px",
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
  slideContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    [sizes.down("xs")]: {
      width: "100%",
    },
  },
};

export default style;
