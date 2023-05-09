import { Button, Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { setUser } from "../../state/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

export const Login = () => {
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/user/login",
        {
          email: email.value,
          password: password.value,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch(setUser(res.data));
        toast.success("User logged in successfully!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error(error.response.data.message);
        } else {
          console.log(error);
        }
      });
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
          log in
        </Typography>
        <TextField
          label="email"
          placeholder="Enter email"
          required
          sx={{ width: "70%", mt: 3, mb: 1 }}
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
          log in
        </Button>
        <Typography color="primary" sx={{ mt: 3 }}>
          <Link to="/register">Already have an account? Register here</Link>
        </Typography>
      </Box>
    </Box>
  );
};
