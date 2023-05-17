import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NormalButton from "./NormalButton";

type CardProps = {
  variant: {
    title: string;
    subtitle: string;
    color: string;
    text: string;
    backgroundColor: string;
  };
};

const card = ({ variant }: CardProps) => (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 24 }} color={variant.color} gutterBottom>
        <h1>{variant.title}</h1>
      </Typography>

      <Typography sx={{ mb: 1.5, height: "100px" }} color={variant.color}>
        {variant.subtitle}
      </Typography>
    </CardContent>
    <div style={{ marginLeft: "10px" }}>
      <NormalButton
        variant={{
          color: "white",
          backgroundColor: variant.backgroundColor,
          border: "white",
        }}
        text={variant.text}
      />
    </div>
  </React.Fragment>
);

export default function CardComponent({ variant }: CardProps) {
  return (
    <Box sx={{ minWidth: 27 }}>
      <Card
        sx={{
          width: "500px",
          height: "350px",
          backgroundColor: variant.backgroundColor,
          borderRadius: "30px",
        }}
        variant="outlined"
      >
        {card({ variant })}
      </Card>
    </Box>
  );
}
