import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    "& h1": {
      color: "#82BF26",
      fontFamily: "Myriad Pro Bold",
      fontSize: "40px",
      marginBottom: "100px",
      [sizes.down("md")]: {
        fontSize: "5em",
      },
      [sizes.down("us")]: {
        fontSize: "3.8em",
      },
    },
  },
  content: {
    display: "flex",
    width: "85%",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "100px",
    padding: "50px",
    borderRadius: "50px",
    background:
      "linear-gradient(to right, #E7F2D5 0%, #E7F2D5 70%, #82BF26 70%, #82BF26 100%)",
    [sizes.down("md")]: {
      display: "block",
      padding: 0,
    },
  },
  contactUs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "auto",
    margin: "40px 0px",
    "& svg": {
      color: "#82BF26",
      fontSize: "40px",
    },
  },
  contactCol: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    "& div": {
      marginLeft: "10px",
    },
  },
  form: {
    padding: "00px 50px",
    width: "40%",
    height: "auto",
    borderRadius: "13px",
    textAlign: "left",
    // marginLeft: "70px",
    "& button": {
      margin: "20px 0px",
      padding: "15px 0px",
      color: "#E7F2D5",
      backgroundColor: "#82BF26",
      borderRadius: "10px",
      marginTop: "80px",
      fontFamily: "Myriad Pro Bold",
      "&:hover": {
        backgroundColor: "#466421",
        transition: "all 0.3s",
      },
    },
    [sizes.down("xl")]: {
      width: "40%",
    },
    [sizes.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "90%",
      marginBottom: "30px",
    },
  },
  secondHeader: {
    fontFamily: "Myriad Pro Regular",
    fontSize: "45px",
  },
  description: {
    color: "#000000",
    fontSize: "14px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
    fontWeight: "400",
  },
  map: {
    width: "40%",
    height: "100%",
    "& img": {
      maxWidth: "90%",
      height: "500px",
      borderRadius: "25px",
      objectFit: "cover",
    },
  },
  address: {
    width: "200px",
    backgroundColor: "#82BF26",
    position: "relative",
    textAlign: "left",
    padding: "30px",
    color: "#F2F2F2",
    borderRadius: "15px",
    top: "95px",
    left: "-10%",
    fontSize: "15px",
    fontWeight: "700",
  },
};

export default style;
