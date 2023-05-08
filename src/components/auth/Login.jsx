import { Button,Box, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import React from "react";

export const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
         sx={{
            borderColor: "primary.main",
            width: "50vw",
            borderWidth: 3,
            borderStyle: "solid",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
      >
        <Typography color="primary" variant="h4">
          sign in
        </Typography>
        <TextField
          label="email"
          placeholder="Enter email"
          required
          sx={{ width: "70%", mt: 3, mb: 1 }}
        />
        <TextField
          label="password"
          placeholder="Enter password"
          type="password"
          required
          sx={{ width: "70%" }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ width: "70%", mt: 3 }}
        >
          sign in
        </Button>
        <Typography color="primary" sx={{ mt: 3 }}>
        <Link to="/register" >Already have an account? Sign up here</Link>
        </Typography>
      </Box>
    </Box>
  );
};
