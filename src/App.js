import "./App.css";
import React, { useEffect, useState } from "react";
import AppRouter from "./Routes";
import Snackbar from "@mui/material/Snackbar";
import Events from "./utils/event";
function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Events.on("Snackbar", "sb", () => {
      setOpen(true);
    });
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppRouter />
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        message="warning"
      />
    </>
  );
}

export default App;
