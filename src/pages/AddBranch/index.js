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



const theme = createTheme();

export default function AddBranch() {
  const [text, setText] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log("data", data.get("email"));
    if (data.get("branchName") && data.get("mobile")) {
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xl">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Add Branch
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 5 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="branchName"
                  required
                  fullWidth
                  id="branchName"
                  label="Branch Name"
                  autoFocus
                  errorMessage="Email is Required"
                  //isError={!text}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile Number"
                  name="mobile"
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="city"
                  label="City"
                  id="city"
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  id="description"
                  autoComplete="given-name"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Branch
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
