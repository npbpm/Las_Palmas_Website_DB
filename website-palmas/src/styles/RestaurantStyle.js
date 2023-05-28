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
};

export default style;
