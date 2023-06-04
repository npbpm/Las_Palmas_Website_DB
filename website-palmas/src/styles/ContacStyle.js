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
    [sizes.down("xs")]: {
      background:
        "linear-gradient(to bottom, #E7F2D5 0%, #E7F2D5 70%, #82BF26 70%, #82BF26 100%)",
      flexDirection: "column",
      padding: "25px",
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
    [sizes.down("lg")]: {
      fontSize: "15px",
      "& svg": {
        fontSize: "30px",
      },
    },
    [sizes.down("md")]: {
      gap: "0px 35px",
      alignItems: "flex-start",
    },
    [sizes.down("sm")]: {
      gap: "0px 30px",
    },
  },
  contactCol: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    "& div": {
      marginLeft: "10px",
      [sizes.down("sm")]: {
        width: "auto",
      },
    },
    [sizes.down("lg")]: {
      width: "38%",
    },
    [sizes.down("md")]: {
      width: "50%",
      fontSize: "13px",
    },
    [sizes.down("sm")]: {
      width: "auto",
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
      // width: "90%",
      padding: 0,
      marginBottom: "30px",
    },
    [sizes.down("xs")]: {
      width: "100%",
      margin: "0px",
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
      [sizes.down("sm")]: {
        maxWidth: "100%",
        marginLeft: "20px",
        marginBottom: "180px",
      },
      [sizes.down("xs")]: {
        maxWidth: "100%",
        marginLeft: "0px",
        marginBottom: "0px",
      },
    },
    [sizes.down("lg")]: {
      width: "50%",
    },
    [sizes.down("md")]: {
      width: "55%",
    },
    [sizes.down("xs")]: {
      width: "100%",
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
    [sizes.down("lg")]: {
      width: "150px",
      fontSize: "12px",
      top: "85px",
      left: "-5px",
    },
    [sizes.down("md")]: {
      left: "5px",
    },
    [sizes.down("xs")]: {
      left: "-45px",
    },
  },
};

export default style;
