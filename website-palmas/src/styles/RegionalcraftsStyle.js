import sizes from "./sizes";

const style = {
  content: {
    padding: "10px",
    display: "flex",
    marginTop: "10px",
    paddingBottom: "40px",
    paddingTop: "40px",
    alignItems: "center",
    backgroundColor: "rgba(116,183,38,0.7)",
    "& img": {
      boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
      borderRadius: "13px",
      maxWidth: "100%",
      maxHeight: "100%",
      width: "55%",
      [sizes.down("md")]: {
        width: "100%",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      },
    },
    "& p": {
      marginLeft: "auto",
      marginRight: "auto",
      padding: "20px",
      width: "40%",
      fontFamily: "'Bebas Neue', cursive !important",
      borderRadius: "13px",
      color: "#3c4001",
      fontSize: "1.5rem",
      [sizes.down("md")]: {
        width: "90%",
      },
      [sizes.down("us")]: {
        width: "85%",
      },
    },
    [sizes.down("md")]: {
      display: "block",
      marginTop: "60px",
      padding: 0,
      paddingTop: "20px",
    },
  },
  container: {
    textAlign: "center",
    "& h1": {
      [sizes.down("sm")]: {
        fontSize: "3em",
      },
    },
  },
};

export default style;
