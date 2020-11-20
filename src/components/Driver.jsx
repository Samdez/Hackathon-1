import { Button, Typography } from "@material-ui/core";
import React from "react";
import { drivercomponent1 } from "./images/images";
import { motion } from 'framer-motion';

import "./Driver.css";
import { useTransform, useViewportScroll } from "framer-motion";

const DriverComponent = () => {

  const { scrollYProgress } = useViewportScroll();
  const xAnim = useTransform(scrollYProgress, [0, 0.5], [300, 0]);
  const fadeScroll = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  return (
    <motion.div className="driverContainer" style={{x: xAnim, opacity: fadeScroll}}>
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
        <Button className="driverButton">Offer a ride</Button>
      </div>
    </motion.div>
  );
};

export default DriverComponent;
