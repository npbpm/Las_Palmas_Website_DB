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
    padding: "10px",
    alignItems: "center",
    marginTop: "10px",
    backgroundColor: "rgba(116,183,38,0.7)",
    [sizes.down("md")]: {
      display: "block",
      paddingBottom: "25px",
    },
  },
  text: {
    borderRadius: "13px",
    marginLeft: "10px",
    fontFamily: "'Bebas Neue', cursive !important",
    color: "#3c4001",
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
    color: "#3c4001",
    fontFamily: "'Bebas Neue', cursive !important",
    fontSize: "1.5em",
    fontWeight: "800",
  },
  menuItem: {
    color: "#3c4001",
    "&:hover": {
      filter: "brightness(50%)",
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
