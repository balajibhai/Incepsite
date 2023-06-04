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
    marginLeft?: string;
  };
};

const card = ({ variant }: CardProps) => (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{
          fontSize: {
            xs: 18, // styles for extra small screens and above
            sm: 24, // styles for small screens and above
          },
        }}
        color={variant.color}
        gutterBottom
      >
        <h1>{variant.title}</h1>
      </Typography>

      <Typography
        sx={{
          mb: 1.5,
          minHeight: {
            xs: "80px", // styles for extra small screens and above
            sm: "100px", // styles for small screens and above
          },
        }}
        color={variant.color}
      >
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
    <Box sx={{ minWidth: 250 }}>
      <Card
        sx={{
          maxWidth: "500px",
          minHeight: "350px",
          backgroundColor: variant.backgroundColor,
          borderRadius: "30px",
          "@media (max-width: 1000px)": {
            // media query for screens up to 600px width
            minWidth: "200px",
            minHeight: "200px",
          },
        }}
        variant="outlined"
      >
        {card({ variant })}
      </Card>
    </Box>
  );
}
