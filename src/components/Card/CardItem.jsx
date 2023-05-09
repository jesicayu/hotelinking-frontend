import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";

const CardItem = ({ offer }) => {
  const { id, image_url, title, description, code, couponId } = offer;
  const [redeemed, setRedeemed] = useState(offer.redeemed);

  const handleGetCoupon = () => {
    axios
      .get(`http://localhost:8000/api/coupon/${id}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        toast.success("Coupon generated successfully!");
      })
      .catch((error) => {
        if (error.response.status === 409) {
          toast.error(error.response.data.message);
        } else {
          console.log(error);
        }
      });
  };

  const handleRedeem = () => {
    axios
      .put(
        `http://localhost:8000/api/user/redeem/${couponId}`,
        {},
        {
          withCredentials: true,
        }
      )
      .then(() => {
        setRedeemed(true);
        toast.success("Coupon redeemed successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Card
      variant="outlined"
      sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 150 },
          height: { xs: 150, sm: "auto" },
          objectFit: "cover",
        }}
        image={image_url}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        {redeemed ? (
          <Typography variant="body2" color="text.secondary">
            Coupon Redeemed
          </Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            {code ? `Coupon Code: ${code}` : description}
          </Typography>
        )}

        <Button
          disableElevation
          variant="contained"
          color="secondary"
          sx={{ mt: 2, borderRadius: 8 }}
          onClick={code ? handleRedeem : handleGetCoupon}
          disabled={redeemed}
        >
          {code ? "Redeem" : "Get Coupon"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardItem;
