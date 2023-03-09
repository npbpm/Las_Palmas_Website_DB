import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { redirect, Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import NavButton from "./NavButton";
import style from "./styles/NavbarStyle";
/* import { green } from "@mui/material/colors";
import { Select } from "@mui/material"; */
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/NavbarWords";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: "200" }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const ResponsiveAppBar = (props) => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const pages = [
    /* { text: words[language].home, path: "/", subservices: 0 },
    {
      text: words[language].place,
      path: "/location",
      subservices: [
        {
          title: words[language].who,
          path: "/who-are-we",
        },
        {
          title: words[language].arrive,
          path: "/arrive",
        },
        {
          title: words[language].valley,
          path: "/cocora-valley",
        },
      ],
    },
    {
      text: words[language].services,
      path: "/services",
      subservices: [
        {
          title: words[language].restaurant,
          path: "/restaurant",
        },
        {
          title: words[language].coffee,
          path: "/cofee-house",
        },
        {
          title: words[language].lodging,
          path: "/lodging",
        },
        {
          title: words[language].camping,
          path: "/camping",
        },
        {
          title: words[language].games,
          path: "/games",
        },
        {
          title: words[language].horse,
          path: "/horseback-riding",
        },
        {
          title: words[language].crafts,
          path: "/regional-crafts",
        },
        {
          title: words[language].glamping,
          path: "/cocora-nidos-del-condor",
        },
        {
          title: words[language].flowers,
          path: "/cocora-viva",
        },
      ],
    },
    {
      text: words[language].packages,
      path: "/packages-and-sales",
      subservices: 0,
    },
    { text: words[language].reviews, path: "/reviews", subservices: 0 },
    { text: words[language].bookings, path: "/booking", subservices: 0 },
    { text: words[language].contact, path: "/contact-us", subservices: 0 }, */
    { text: words[language].us, path: "/who-are-we" },
    { text: words[language].services, path: "/services" },
    { text: words[language].packages, path: "/packages-and-sales" },
    { text: words[language].contact, path: "/contact-us" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { classes } = props;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e, newPath) => {
    setAnchorElNav(null);
    redirect(newPath);
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="100%">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              noWrap
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".05rem",
                color: "black",
              }}
              className={classes.logoContainer}
            >
              <Link to={"/"} style={{ textDecoration: "none" }}>
                {/* <img
                  className={classes.logo}
                  src={require("./images/PALMAS_DE_COCORA_LOGO-1-removebg-preview.png")}
                  alt="Logo Not Found"
                  style={{
                    position: "relative",
                    top: 0,
                    left: 0,
                    zIndex: "200",
                  }}
                /> */}
                <h1>Las Palmas de Cocora</h1>
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, idx) => (
                  <NavButton
                    key={idx}
                    page={page}
                    handleCloseNavMenu={handleCloseNavMenu}
                  />
                ))}
                <MenuItem>
                  {/* <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Language"
                    onChange={changeLanguage}
                    size="small"
                    variant="standard"
                  >
                    <MenuItem value="spanish">🇨🇴</MenuItem>
                    <MenuItem value="english">🇺🇸</MenuItem>
                  </Select> */}
                  <div className={classes.langFlag} style={{ margin: "20px" }}>
                    <img
                      src={require("./images/colombia.png")}
                      onClick={(e) => changeLanguage("spanish")}
                    />
                  </div>
                  <div className={classes.langFlag}>
                    <img
                      src={require("./images/uk.jpg")}
                      onClick={(e) => changeLanguage("english")}
                    />
                  </div>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              <Link
                to={"/"}
                style={{ textDecoration: "none", whiteSpace: "initial" }}
              >
                {/* <img
                  className={classes.logo}
                  src={require("./images/PALMAS_DE_COCORA_LOGO-1-removebg-preview.png")}
                  alt="Logo Not Found"
                /> */}
                <h1>Las Palmas de Cocora</h1>
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 0,
                display: {
                  xs: "none",
                  width: "auto",
                  height: "50px",
                  md: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  borderRadius: "30px",
                },
              }}
            >
              {pages.map((page, idx) => (
                <div key={idx} style={{ margin: "20px" }}>
                  <NavButton
                    page={page}
                    handleCloseNavMenu={handleCloseNavMenu}
                  />
                </div>
              ))}
              <div className={classes.langFlag} style={{ margin: "20px" }}>
                {/* <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={language}
                  label="Language"
                  onChange={changeLanguage}
                  size="small"
                  variant="standard"
                  sx={{
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <MenuItem value="spanish">🇨🇴</MenuItem>
                  <MenuItem value="english">🇺🇸</MenuItem>
                </Select> */}
                <img
                  src={require("./images/colombia.png")}
                  onClick={(e) => changeLanguage("spanish")}
                />
              </div>
              <div className={classes.langFlag}>
                <img
                  src={require("./images/uk.jpg")}
                  onClick={(e) => changeLanguage("english")}
                />
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{ backgroundColor: "#6dc1e7 !important" }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};
export default withStyles(style)(ResponsiveAppBar);
