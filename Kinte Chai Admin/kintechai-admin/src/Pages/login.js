import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  CircularProgress,
  Button,
} from "@material-ui/core";
import logo from "../media/logo.png";

class login extends Component {
  render() {
    return (
      <Container maxWidth="xs">
        <Box
          bgcolor="white"
          boxShadow="2"
          borderRadius="12px"
          textAlign="center"
          p="24px"
          mt="50px"
        >
          <img src={logo} height="50px" alt="50px" />
          <Typography variant="h5" color="textSecondary">
            ADMIN
          </Typography>
          <TextField
            label="Email"
            id="outlined-size-small"
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Password"
            id="outlined-size-small"
            type="password"
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />
          <br />
          <br />
          <CircularProgress size={24} thickness={4} color="secondary" />
          <br />
          <br />
          <Button
            disableElevation
            variant="contained"
            color="primary"
            fullWidth
          >
            LOGIN
          </Button>
        </Box>
      </Container>
    );
  }
}

export default login;
