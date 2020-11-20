import { Typography } from "@material-ui/core";
import React from "react";
import { logo } from "./images/images";
import Trip from "./Trip";

import "./Passenger.css";

function PassengerComponent() {
  return (
    <div className="passengerBg">
      <img className="mainLogo" src={logo} alt="" />
      <Typography className="textPassanger" variant="h1">
        Passengers, welcome on BlaBlaCalèche.
      </Typography>
      <Typography>Share a carriage where ever you want !</Typography>
      <Typography>Let's go for a ride !</Typography>
      <Trip />
    </div>
  );
}

export default PassengerComponent;
