import React, { useState, useEffect } from "react";
import { OfferList } from "../components/Card/OfferList";
import axios from "axios";
import { Typography, Grid } from "@mui/material";

export const UserCoupons = () => {

  const [userCoupons, setUserCoupons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/usercoupons", { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        const structuredData = res.data.map((coupon) => ({
          ...coupon.offer,
          code: coupon.code,
          redeemed: coupon.redeemed,
          couponId: coupon.id,
        }));
        setUserCoupons(structuredData);
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
      <Typography variant="h2" fontWeight="500" color="primary">
       Coupons to redeem
      </Typography>

      <OfferList offers={userCoupons} />
    </Grid>
  );
 
}
