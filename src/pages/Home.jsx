import React, { useState, useEffect } from "react";
import { OfferList } from "../components/Card/OfferList";
import axios from "axios";
import { Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";

export const Home = () => {
  const [offers, setOffers] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/offer", { withCredentials: true })
      .then((res) => {
        setOffers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ pt: 10 }}
    >
      <Typography
        variant="h3"
        fontWeight="500"
        color="primary"
        sx={{
          textAlign: "center",
          m: { xs: 2, sm: "auto" },
        }}
      >
        Welcome {user.name} to COUPON HOUSE
      </Typography>

      <OfferList offers={offers} />
    </Grid>
  );
};
