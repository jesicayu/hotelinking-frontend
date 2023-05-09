import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import axios from "axios";
import { setUser } from "../state/user";
import { toast } from "react-hot-toast";

export const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post(
        "http://localhost:8000/api/user/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(setUser({}));
        toast.success("User logged out successfully!");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h5" sx={{ color: "white" }}>
              COUPON HOUSE
            </Typography>
          </Link>
          <Grid>
            {user?.email ? (
              <div>
                <Link to="/usercoupons">
                  <Button sx={{ color: "white" }}>My Coupons</Button>
                </Link>

                <Button sx={{ color: "white" }} onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div>
                <Link to="/register">
                  <Button sx={{ color: "white" }}>Register</Button>
                </Link>
                <Link to="/login">
                  <Button sx={{ color: "white" }}>Login</Button>
                </Link>
              </div>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
