import { Typography } from "@material-ui/core";
import React from "react";
import { logo } from "./images/images";
import Trip from "./Trip";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { fade } from "./animation";

import "./Passenger.css";

function PassengerComponent() {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      animate="show"
      className="passengerBg"
    >
      <img className="mainLogo" src={logo} alt="" />
      <Typography className="textPassanger" variant="h1">
        Welcome to BlaBlaCalèche!
      </Typography>
      <Typography>Share a carriage whenever you want !</Typography>
      <Typography>Let's go for a ride !</Typography>
      <Trip />
    </motion.div>
  );
}

export default PassengerComponent;
