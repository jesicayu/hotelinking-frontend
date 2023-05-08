import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "./CardItem";
import { Grid } from "@mui/material";

export const OfferList = () => {
  const [offers, setOffers] = useState([]);

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
    // <div>
    //   {offers.map((offer, i) => (
    //     < CardItem key={i} offer={offer} />
    //   ))}
    // </div>
    <Grid container spacing={2} sx={{ width: "70%", margin: "0 auto" }}>
      {offers.map((offer, i) => (
        <Grid item xs={12} key={i}>
          <CardItem offer={offer} />
        </Grid>
      ))}
    </Grid>
  );
};
