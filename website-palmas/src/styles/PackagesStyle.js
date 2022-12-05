import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    height: "auto",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
      boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
      borderRadius: "50%",
      width: "250px",
      height: "250px",
      margin: "10px",
      marginBottom: "40px",
      [sizes.down("lg")]: {
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        margin: 0,
        width: "35% !important",
        height: "auto !important",
      },
      [sizes.down("md")]: {
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        margin: 0,
        width: "95% !important",
        height: "auto !important",
      },
    },
    "& p": {
      marginLeft: "auto",
      marginRight: "auto",
      fontFamily: "'Bebas Neue', cursive !important",
      fontSize: "1.2rem",
      borderRadius: "13px",
      width: "90%",
      padding: "20px",
    },
    "& ul": {
      fontFamily: "'Bebas Neue', cursive !important",
      fontSize: "1.2rem",
    },
    "& h1": {
      [sizes.down("md")]: {
        fontSize: "5em",
      },
      [sizes.down("us")]: {
        fontSize: "3.4em",
      },
    },
  },
  sales: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    backgroundColor: "#422711",
    paddingTop: "40px",
    "& p": {
      color: "#F6923D",
      marginLeft: "5px",
      fontSize: "1.5rem",
    },
    [sizes.down("lg")]: {},
    [sizes.down("md")]: {
      display: "block",
      "& p": {
        margin: 0,
        marginTop: "40px",
      },
    },
  },
  packages: {
    width: "90%",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    [sizes.down("sm")]: {
      display: "block",
      marginTop: "100px",
    },
  },
  package: {
    margin: "5px",
    width: "24%",
    backgroundColor: "rgba(246,146,61,0.95)",
    borderRadius: "13px",
    paddingTop: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "& ul": {
      textAlign: "left",
      [sizes.down("md")]: {
        margin: "0px 10px",
      },
    },
    "&:hover": {
      transform: "scale(1.2)",
      transition: "ease-in-out all 0.3s",
      [sizes.down("md")]: {
        transform: "none",
      },
    },
    [sizes.down("md")]: {
      width: "31%",
    },
    [sizes.down("sm")]: {
      width: "95%",
    },
    "& img": {
      [sizes.down("lg")]: {
        width: "95% !important",
        height: "330px !important",
      },
      [sizes.down("md")]: {
        height: "300px !important",
      },
      [sizes.down("sm")]: {
        height: "670px !important",
      },
      [sizes.down("xs")]: {
        height: "500px !important",
      },
      [sizes.down("xxs")]: {
        height: "400px !important",
      },
      [sizes.down("us")]: {
        height: "290px !important",
      },
    },
  },
};

export default style;
