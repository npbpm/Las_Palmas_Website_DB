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
    },
    "& p": {
      fontSize: "24px",
      fontFamily: "Roboto",
      marginRight: "auto",
      marginLeft: "auto",
      marginBottom: "40px",
      width: "50%",
    },
  },
  services: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default style;