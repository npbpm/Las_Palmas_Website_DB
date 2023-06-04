import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    height: "auto",
    backgroundColor: "#F2F2F2",
    "& img": {
      maxWidth: "80%",
      // maxHeight: "100%",
      borderRadius: "50%",
      width: "250px",
      height: "250px",
      margin: "10px",
      marginBottom: "40px",
      aspectRatio: 3 / 2,
      objectFit: "cover",
      [sizes.down("lg")]: {
        margin: 0,
        width: "35%",
        height: "auto",
      },
      [sizes.down("md")]: {
        margin: 0,
      },
      [sizes.down("xs")]: {
        maxWidth: "90%",
        width: "30%",
      },
    },
    "& p": {
      marginLeft: "auto",
      marginRight: "auto",
      fontFamily: "Roboto",
      fontSize: "24px",
      borderRadius: "13px",
      width: "50%",
      padding: "20px",
      [sizes.down("xs")]: {
        width: "70%",
        fontSize: "18px",
      },
    },
    "& ul": {
      fontFamily: "'Bebas Neue', cursive !important",
      fontSize: "1.2rem",
    },
    "& h1": {
      color: "#82BF26",
      fontFamily: "Myriad Pro Bold",
      fontSize: "40px",
      backgroundColor: "#FFFFFF",
      [sizes.down("us")]: {
        fontSize: "3.4em",
      },
    },
  },
  slides: {
    width: "100%",
    marginBottom: "20px",
    backgroundColor: "#FFFFFF",
  },
  packages: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: "50px",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    [sizes.down("xs")]: {
      flexWrap: "wrap",
    },
  },
  package: {
    margin: "5px 28px",
    width: "30%",
    height: "800px",
    backgroundColor: "#CEE6AA",
    borderRadius: "13px",
    paddingTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: "30px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "& h4": {
      fontFamily: "Myriad Pro Bold",
      fontSize: "40px",
      width: "60%",
      marginRight: "auto",
      marginLeft: "auto",
      [sizes.down("md")]: {
        fontSize: "30px",
      },
      [sizes.down("sm")]: {
        fontSize: "24px",
      },
      [sizes.down("xs")]: {
        fontSize: "34px",
      },
    },
    "& p": {
      color: "#000000",
      [sizes.down("md")]: {
        fontSize: "20px",
        width: "80%",
      },
      [sizes.down("xl")]: {
        overflow: "scroll",
        msOverflowStyle: "none" /* IE and Edge */,
        scrollbarWidth: "none" /* Firefox */,
        height: "250px",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
    },
    "& ul": {
      textAlign: "left",
      color: "#000000",
      marginLeft: "20px",
      [sizes.down("md")]: {
        margin: "0px 10px",
      },
    },
    "&:hover": {
      transform: "scale(1.03)",
      transition: "all 0.4s",
      [sizes.down("md")]: {
        transform: "none",
      },
    },
    [sizes.down("xl")]: {
      width: "29%",
    },
    [sizes.down("lg")]: {
      width: "28%",
      "& h4": {
        fontSize: "34px",
      },
    },
    [sizes.down("md")]: {
      width: "30%",
      margin: "5px 10px",
    },
    [sizes.down("sm")]: {
      width: "95%",
      height: "700px",
    },
    [sizes.down("xs")]: {
      gap: "30px 0px",
    },
    "& img": {
      [sizes.down("lg")]: {
        width: "85%",
        height: "250px",
      },
      [sizes.down("md")]: {
        height: "250px",
      },
      [sizes.down("xs")]: {
        width: "40%",
        height: "200px",
      },
      [sizes.down("xxs")]: {
        height: "400px",
      },
      [sizes.down("us")]: {
        height: "290px",
      },
    },
  },
  cardtext: {
    // width: "50%",
    height: "500px",
  },
  reserveBtn: {
    padding: "13px 50px",
    borderRadius: "12px",
    backgroundColor: "#FFFFFF",
    textDecoration: "none",
    fontSize: "24px",
    color: "#000000",
    fontFamily: "Myriad Pro Regular",
    marginTop: "auto",
    "&:hover": {
      backgroundColor: "#F2F2F2",
      transition: "all 0.3s",
    },
  },
};

export default style;
