import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { carriage6 } from "./images/images";
import { useContext } from "react";
import tripContext from "../contexts/tripContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function PopCard() {
  const { departureCity, arrivalCity } = useContext(tripContext);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={carriage6}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Booking confirmation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            You have booked a journey from {departureCity} to {arrivalCity}.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            You will receive a confirmation e-mail within the next few minutes.
          </Typography>
          <Typography>Thank you for choosing BlaBlacalèche ! </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PopCard;
