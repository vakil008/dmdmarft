import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { endPoints } from "../../config";
import APICaller from "../../utils/APICaller";
import Events from "../../utils/event";
import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "../../store/actions/user";
const { login } = endPoints;
const theme = createTheme();

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    // eslint-disable-next-line no-console
    if (data.get("email") && data.get("password")) {
      const endpoint = login;
      const method = "POST";
      let body = {
        email: data.get("email"),
        password: data.get("password"),
      };

      APICaller(endpoint, method, body)
        .then((response) => {
          console.log("response after login call --> ", response);
          const { status, data } = response;
          //const { Failed } = data;
          console.log("status", status);
          if (response && data && status == 200) {
            const { data: userData, succeeded } = data;
            console.log("status", userData);
            if (succeeded) {
              const { email, jwToken, userName } = userData;
              dispatch(setUserToken(jwToken));
            }
          }
        })
        .catch((error) => {
          console.log("error making login call --> ", error);
          const { status, data } = error;
          console.log("status error", status, " data ", data);
          const { Message } = data;
          console.log("Message", Message);
          Events.trigger("Snackbar");
        });
    } else {
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
