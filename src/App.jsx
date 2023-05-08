import "./App.css";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./theme/customTheme";
import { Login } from "./components/auth/Login";
import { Registration } from "./components/auth/Registration";
import { OfferList } from "./components/Card/OfferList";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <OfferList/>
      <Routes>
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
