import React from "react";
import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from "../reducers/snackbar/snackbar";
import MuiAlert from "@mui/material/Alert";

// Define the Alert component
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar() {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector((state) => state.snackbar);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(handleClose());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleCloseSnackbar}
    >
      <Alert onClose={handleCloseSnackbar} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
