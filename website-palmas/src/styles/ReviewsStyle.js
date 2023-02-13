import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    "& h1": {
      [sizes.down("md")]: {
        fontSize: "5em",
      },
      [sizes.down("us")]: {
        fontSize: "3.8em",
      },
    },
  },
  content: {
    backgroundColor: "rgba(116,183,38,0.7)",
    width: "90%",
    textAlign: "center",
    padding: "30px",
    borderRadius: "13px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
    marginBottom: "50px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    [sizes.down("md")]: {
      padding: 0,
    },
  },
  opinions: {
    display: "flex",
    height: "80vh",
    alignItems: "stretch",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "30px",
    padding: "20px",
    overflowY: "scroll",
    boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
    [sizes.down("md")]: {
      padding: "10px",
    },
  },
  opinion: {
    padding: "10px",
    border: "solid 1px",
    backgroundColor: "#b8e29f",
    fontFamily: "'Bebas Neue', cursive !important",
    letterSpacing: "0.8px",
    fontSize: "1.3rem",
    width: "98%",
    color: "#422711",
  },
  formBtns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
};

export default style;
