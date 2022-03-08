import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";
import AppHeader from "./header";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const PrivateLayout = () => {
  const mdTheme = createTheme();
  const loginTokenRes = false;

  return (
    <>
      {loginTokenRes ? (
        <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppHeader />
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
              }}
            >
              <Outlet />
            </Box>
          </Box>
        </ThemeProvider>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default PrivateLayout;
