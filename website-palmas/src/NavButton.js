import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { withStyles } from "@mui/styles";
import style from "./styles/NavButtonStyle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./styles/NavButtonStyleCss.css";

function MenuPopupState(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const { page, classes, handleCloseNavMenu, isFooter } = props;

  const open = Boolean(anchorEl);

  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavLink
      className={classes.link}
      to={page.path}
      onClick={(e) => handleCloseNavMenu(e, page.path)}
    >
      <MenuItem className={classes.menuItemNoSubServices}>{page.text}</MenuItem>
    </NavLink>
  );
}

export default withStyles(style)(MenuPopupState);
