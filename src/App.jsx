import "./App.css";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./theme/customTheme";
import { Login } from "./components/auth/Login";
import { Registration } from "./components/auth/Registration";
import { NavBar } from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { UserCoupons } from "./pages/UserCoupons";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/checkauth", {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Toaster />
      <Routes>
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/usercoupons" element={<UserCoupons />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
