import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const CustomAlert = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity="error">
        This is an error alert — check it out!
      </MuiAlert>
    </Snackbar>
  );
};

export default CustomAlert;
