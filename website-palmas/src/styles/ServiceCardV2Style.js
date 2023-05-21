import sizes from "./sizes";

const style = {
  serviceCard: {
    width: "33%",
  },
  content: {
    width: "80%",
    height: "650px",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#E7F2D5",
    borderRadius: "40px 40px 20px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "30px",
  },
  serviceCardImg: {
    width: "100%",
    aspectRatio: 3 / 2,
    borderRadius: "40px 40px 0 0",
    marginBottom: "30px",
  },
  serviceCardInfo: {
    "& h4": {
      fontSize: "45px",
      marginBottom: "60px",
    },
    "& a": {
      padding: "13px 50px",
      borderRadius: "12px",
      backgroundColor: "#FFFFFF",
      textDecoration: "none",
      fontSize: "24px",
      color: "#000000",
      fontFamily: "Myriad Pro Regular",
      "&:hover": {
        backgroundColor: "#F2F2F2",
        transition: "all 0.3s",
      },
    },
  },
};

export default style;
