import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NormalButton from "./NormalButton";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
    <div style={{ marginLeft: "10px" }}>
      <NormalButton text="Click Me" />
    </div>
  </React.Fragment>
);

export default function CardComponent() {
  return (
    <Box sx={{ minWidth: 27 }}>
      <Card
        sx={{ width: "300px", height: "250px", backgroundColor: "green" }}
        variant="outlined"
      >
        {card}
      </Card>
    </Box>
  );
}
