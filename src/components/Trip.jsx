import React, { forwardRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { DatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Trip() {
  const classes = useStyles();
  const [openDeparture, setOpenDeparture] = useState(false);
  const [openArrival, setOpenArrival] = useState(false);

  const handleClickOpenDeparture = () => {
    setOpenDeparture(true);
  };
  const handleCloseDeparture = () => {
    setOpenDeparture(false);
  };
  const handleClickOpenArrival = () => {
    setOpenArrival(true);
  };
  const handleCloseArrival = () => {
    setOpenArrival(false);
  };

  const cities = [
    { name: "Bordeaux", coordinates: "44.8333, -0.5667" },
    { name: "Lille", coordinates: "50.6333, 3.0667" },
    { name: "Lyon", coordinates: "45.75, 4.85" },
    { name: "Marseille", coordinates: "43.296482,  5.36978" },
    { name: "Paris", coordinates: "48.8534, 2.3488" },
    { name: "Rennes", coordinates: "48.0833, -1.6833" },
    { name: "Toulouse", coordinates: "43.604652, 1.444209" },
  ];
  console.log(`Ville de depart`, departureCity);
  console.log(`Coordonnées ville de départ`, departureCityCoordinates);
  console.log(`Ville d'arrivée`, arrivalCity);
  console.log(`Coordonnées ville darrivée`, arrivalCityCoordinates);
  console.log(selectedDate);
  return (
    <>
      {/* Departure Button */}
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpenDeparture}
        >
          Selectionnez votre ville de départ
        </Button>
        <Dialog
          fullScreen
          open={openDeparture}
          onClose={handleCloseDeparture}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseDeparture}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                DEPART
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            {cities.map((city) => {
              return (
                <>
                  <ListItem
                    button
                    key={city.name}
                    onClick={() => {
                      handleCloseDeparture();
                      setDepartureCity(city.name);
                      setDepartureCityCoordinates(city.coordinates);
                    }}
                  >
                    <ListItemText primary={city.name} />
                  </ListItem>
                  <Divider />
                </>
              );
            })}
          </List>
        </Dialog>
      </div>

      {/* Arrival Button */}
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpenArrival}
        >
          Selectionnez votre ville d'arrivée
        </Button>
        <Dialog
          fullScreen
          open={openArrival}
          onClose={handleCloseArrival}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseArrival}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                ARRIVÉE
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            {cities.map((city) => {
              return (
                <>
                  <ListItem
                    key={city.name}
                    button
                    onClick={() => {
                      handleCloseArrival();
                      setArrivalCity(city.name);
                      setArrivalCityCoordinates(city.coordinates);
                    }}
                  >
                    <ListItemText primary={city.name} />
                  </ListItem>
                  <Divider />
                </>
              );
            })}
          </List>
        </Dialog>
      </div>

      {/* Date selection */}
      {/* Date format : "yyyy-M-dTHH:mm:ss" */}
      <DatePicker
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
        animateYearScrolling
        // maxDate={Date(2019 - 01 - 01)}
      />
    </>
  );
}

export default Trip;
