import { Typography } from "@material-ui/core";
import React from "react";
import { logo } from "./images/images";
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
      <Typography variant="h1">
        Passengers, welcome on BlaBlaCalèche.
      </Typography>
      <Typography>Share a carriage where ever you want !</Typography>
      <Typography>Let's go for a ride !</Typography>
    </motion.div>
  );
}

export default PassengerComponent;
