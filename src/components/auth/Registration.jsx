import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { toast } from "react-hot-toast";

export const Registration = () => {
  const navigate = useNavigate();
  const name = useInput();
  const email = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/user/register",
        {
          name: name.value,
          email: email.value,
          password: password.value,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        toast.success("User registered successfully!");
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

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
        component="form"
        onSubmit={handleSubmit}
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
          register
        </Typography>
        <TextField
          label="name"
          placeholder="Enter your name"
          required
          sx={{ width: "70%", mt: 3, mb: 1 }}
          {...name}
        />
        <TextField
          label="email"
          placeholder="Enter email"
          required
          sx={{ width: "70%", mb: 1 }}
          {...email}
        />
        <TextField
          label="password"
          placeholder="Enter password"
          type="password"
          required
          sx={{ width: "70%" }}
          {...password}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ width: "70%", mt: 3 }}
        >
          register
        </Button>
        <Typography sx={{ mt: 3 }}>
          <Link to="/login">Already have an account? Log in here</Link>
        </Typography>
      </Box>
    </Box>
  );
};
