import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { lightGreen } from "@mui/material/colors";
import { useContext, useEffect } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { AuthContext } from "./context/auth/AuthContext";
import axios from "axios";

export default function Authentication(props) {
  const { validateAdmin, keyDownHandler } = props;
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const { language } = useContext(LanguageContext);

  const { isAuthenticated, login } = useContext(AuthContext);

  /*   useEffect(() => {
    if (isAuthenticated) {
      validateAdmin();
    } else {
      alert("Incorrect Password");
      setPassword("");
    }
  }, [isAuthenticated]); */

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    login({
      name: "Carmenza",
      password,
    });

    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        sx={{ color: "rgb(199,28,0)", borderColor: "rgb(199,28,0)" }}
        onClick={handleClickOpen}
      >
        Editar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contraseña admin</DialogTitle>
        <DialogContent>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              autoFocus
              margin="dense"
              id="password"
              label={language === "spanish" ? "Contraseña" : "Password"}
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              value={password}
              validators={["required"]}
              errorMessages={["Contraseña Invalida"]}
            />
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit">Enviar</Button>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}
