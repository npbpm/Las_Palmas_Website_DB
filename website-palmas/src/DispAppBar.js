import * as React from "react";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function DispAppBar() {
  const { language } = useContext(LanguageContext);

  return (
    <Box sx={{ height: "80px" }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: red[800], color: "rgb(245,238,219)" }}
      >
        <Toolbar sx={{ minHeight: "40px !important" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {language === "spanish"
              ? "Abiertos de Lunes a Domingo, de 8am a 7pm"
              : "Open all week, from 8am to 7pm"}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
