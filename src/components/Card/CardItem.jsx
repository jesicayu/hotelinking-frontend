import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const CardItem = ({ offer }) => {
  const { image_url, title, description } = offer;

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 150, objectFit: "cover" }}
        image={image_url}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
          Get Code
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardItem;
