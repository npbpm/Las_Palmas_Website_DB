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
        fontSize: "5.4rem",
      },
    },
    [sizes.down("us")]: {
      "& h1": {
        fontSize: "4.8rem",
      },
    },
  },
  content: {
    display: "flex",
    padding: "10px",
    alignItems: "center",
    marginTop: "10px",
    backgroundColor: "rgb(131,77,33)",
    [sizes.down("md")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "2px",
    },
  },
  text: {
    borderRadius: "13px",
    marginLeft: "10px",
    fontFamily: "'Bebas Neue', cursive !important",
    color: "#F6923D",
    fontSize: "1.4rem",
    [sizes.down("md")]: {
      margin: 0,
    },
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
  },
  menu: {
    color: "#F6923D",
    fontFamily: "'Bebas Neue', cursive !important",
    fontSize: "1.5em",
    fontWeight: "800",
  },
  menuItem: {
    color: "#F6923D",
    "&:hover": {
      filter: "brightness(80%)",
      transition: "ease-in-out all 0.2s",
    },
  },
  environments: {
    padding: "8px 2px",
    "& ul": {
      [sizes.down("xl")]: {
        margin: 0,
        padding: 0,
      },
    },
    [sizes.down("us")]: {
      fontSize: "1.1rem",
    },
  },
  plans: {
    display: "flex",
    alignItems: "center",
    marginBottom: "-35px",
    marginTop: "10px",
    "& p": {
      transform: "translateY(-3px)",
      margin: 0,
    },
  },
};

export default style;
