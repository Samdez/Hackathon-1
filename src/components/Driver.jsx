import { Button, Typography } from "@material-ui/core";
import React from "react";
import { drivercomponent1 } from "./images/images";
import { motion } from 'framer-motion';

import "./Driver.css";
import { useTransform, useViewportScroll } from "framer-motion";

const DriverComponent = () => {

  const { scrollYProgress } = useViewportScroll();
  const xAnim = useTransform(scrollYProgress, [0, 1], [1000, 0]);
  const reverseXAnim = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
  return (
    <motion.div className="driverContainer" style={{y: xAnim}}>
      <div className="containerImg">
        <img className="driverImg" src={drivercomponent1} alt="driverimg" />
      </div>
      <div className="containerText">
        <Typography variant='h2' className="driverText">
          You rather drive and share your carillage with new people ? Tel us
          where are you going !
        </Typography>
        <Typography variant='p' className="driverText">
          Together, lets help millions of people to travel easier and make this
          your least expensive journey ever. Every week, every month. To meet
          with a loved one, or to discover a new place. With a big family, or a
          big luggage. To Paris, Amsterdam or any other European destination.
        </Typography>
        <button className="driverButton">Offer a ride</button>
      </div>
    </motion.div>
  );
};

export default DriverComponent;
