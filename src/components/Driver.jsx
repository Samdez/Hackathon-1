import { Button, Typography } from "@material-ui/core";
import React from "react";
import { drivercomponent1 } from "./images/images";

import "./Driver.css";

const DriverComponent = () => {
  return (
    <div className="driverContainer">
      <div className="containerImg">
        <img className="driverImg" src={drivercomponent1} alt="driverimg" />
      </div>
      <div className="containerText">
        <Typography variant="h2" className="driverText">
          You'd rather drive and share your carriage with new people ? Tell us
          where you're going !
        </Typography>
        <Typography variant="p" className="driverText">
          We help millions of people to travel through an easier way and make
          this their least expensive journey ever. Every week, every month. To
          meet with a loved one, or to discover a new place. With a big family,
          or a big luggage. Our service is already available in most of France's
          main cities.
        </Typography>
        <Button className="driverButton">Offer a ride</Button>
      </div>
    </div>
  );
};

export default DriverComponent;
