import React from "react";
import "./TravelCard.css";
import { Avatar, CardHeader, CardMedia, Grid } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import { NavLink, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearScaleIcon from "@material-ui/icons/LinearScale";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundSize: "cover",
  },
  margin: {
    margin: "2rem",
    minWidth: "30vw",
    maxWidth: "45vw",
  },
  path: {
    transform: "rotate(90deg)",
  },
  flex: {
    display: "flex",
    justifyContent: "flex-start",
  },
  icon: {
    height: "100%",
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function TravelCard({
  arrival,
  departure,
  duration,
  price,
  backgroundImage,
  portrait,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Grid className={classes.margin} item xs={12}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src={portrait}
                className={classes.avatar}
              />
            }
            title={departure + "/" + arrival}
            subheader={duration + "hours"}
          />
          <CardMedia
            className={classes.media}
            image={backgroundImage}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {Math.round(price / 3.2)} francs
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <div>
        <Button
          component={Link}
          to="/pop-confirmation"
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          {" "}
          Select this trip
        </Button>
      </div>
    </>
  );
}

export default TravelCard;
