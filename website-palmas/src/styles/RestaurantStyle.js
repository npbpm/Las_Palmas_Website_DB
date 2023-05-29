import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    width: "100%",
    "& p": {
      padding: "10px",
    },
    "& h3": {
      fontFamily: "'Bebas Neue', cursive",
    },
    [sizes.down("md")]: {
      "& h1": {
        fontSize: "4rem",
      },
    },
    [sizes.down("sm")]: {
      "& h1": {
        fontSize: "3.8rem",
      },
    },
    [sizes.down("us")]: {
      "& h1": {
        fontSize: "3.5rem",
      },
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    [sizes.down("md")]: {
      display: "block",
      paddingBottom: "25px",
    },
  },
  titleImg: {
    maxWidth: "30%",
  },
  subtitle: {
    width: "45%",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "24px",
    fontFamily: "Roboto",
  },
  presentation: {
    width: "90%",
    height: "500px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: "45%",
    height: "100%",
  },
  restaurantImg: {
    maxWidth: "80%",
    borderRadius: "45px",
  },
  dessertImg: {
    maxWidth: "35%",
    borderRadius: "50%",
    position: "relative",
    bottom: "220px",
    right: "-230px",
  },
  menu: {
    width: "30%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "space-evenly",
  },
  menuImg: {
    maxWidth: "60%",
    marginTop: "50px",
  },
  menuText: {
    fontSize: "40px",
    fontFamily: "Roboto",
    fontWeight: "500",
  },
  menuItem: {
    textDecoration: "none",
    color: "#000000",
    fontWeight: "600",
  },
  ambientTitle: {
    fontSize: "40px",
    fontFamily: "Myriad Pro Bold",
    color: "#82BF26",
    marginTop: "80px",
  },
  ambientCards: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-evenly",
    marginTop: "50px",
    marginBottom: "30px",
    width: "95%",
    height: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    gap: "0px 40px",
  },
  ambientCard: {
    width: "400px",
    borderRadius: "8px",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "80px 0px",
    backgroundColor: "transparent",
    perspective: "1000px" /* Remove this if you don't want the 3D effect */,
    "& h3": {
      fontSize: "30px",
      fontFamily: "Myriad Pro Regular",
    },
  },
  flippedCardInner: {
    transform: "rotateY(180deg)",
    transition: "transform 0.8s",
    height: "100%",
  },
  ambientCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
  },
  frontInner: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  backInner: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    "& img": {
      maxWidth: "50%",
      borderRadius: "50%",
      objectFit: "cover",
      width: "200px",
      height: "200px",
      marginTop: "auto",
      marginBottom: "10px",
    },
  },
  ambientCardFront: {
    borderRadius: "8px",
    height: "100%",
  },
  cardLogo: {
    maxWidth: "60%",
  },
  backText: {
    transform: "rotateY(180deg)",
    fontSize: "24px",
    fontFamily: "Myriad Pro Regular",
  },
  reserveBtn: {
    padding: "13px 50px",
    borderRadius: "12px",
    backgroundColor: "#FFFFFF",
    textDecoration: "none",
    fontSize: "24px",
    color: "#000000",
    fontFamily: "Myriad Pro Regular",
    // marginTop: "auto",
    border: "none",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#F2F2F2",
      transition: "all 0.3s",
    },
  },
  closeIcon: {
    border: "none",
    backgroundColor: "transparent",
    width: "50px",
    height: "50px",
    position: "relative",
    top: "-90px",
    right: "180px",

    "&:hover": {
      cursor: "pointer",
    },
    "& img": {
      maxWidth: "100%",
      objectFit: "contain",
    },
  },
};

export default style;
