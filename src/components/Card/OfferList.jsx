import React from "react";
import CardItem from "./CardItem";
import { Grid } from "@mui/material";

export const OfferList = ({offers}) => {

  return (
    <Grid container spacing={2} sx={{ width: "70%", margin: "0 auto", pt:4, pb:8 }}>
      {offers.map((offer, i) => (
        <Grid item xs={12} key={i}>
          <CardItem offer={offer} />
        </Grid>
      ))}
    </Grid>
  );
};
