import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem } from "@mui/material";
import {
  TextValidator,
  SelectValidator,
  ValidatorForm,
} from "react-material-ui-form-validator";
import { lightGreen } from "@mui/material/colors";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/FormDialogWords";

export default function Authentication(props) {
  const { validateAdmin } = props;
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const { language } = useContext(LanguageContext);

  const {} = words[language];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (password === "riMK5ZWHErheLdWb") {
      validateAdmin();
    } else {
      alert("Incorrect Password");
      setPassword("");
    }
    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        sx={{ color: lightGreen[800], borderColor: lightGreen[500] }}
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
