import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    padding: "30px",
    "& h1": {
      color: "#82BF26",
      fontSize: "50px",
      fontFamily: "Myriad Pro Bold",
      marginBottom: "20px",
      [sizes.down("xs")]: {
        fontSize: "30px",
      },
    },
    "& p": {
      fontSize: "24px",
      fontFamily: "Roboto",
      marginRight: "auto",
      marginLeft: "auto",
      marginBottom: "40px",
      width: "50%",
      [sizes.down("md")]: {
        width: "70%",
      },
      [sizes.down("sm")]: {
        fontSize: "20px",
      },
      [sizes.down("xs")]: {
        fontSize: "18px",
        width: "80%",
      },
      [sizes.down("us")]: {
        width: "95%",
      },
    },
    [sizes.down("us")]: {
      padding: "5px",
    },
  },
  services: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    [sizes.down("us")]: {
      width: "100%",
    },
  },
};

export default style;
