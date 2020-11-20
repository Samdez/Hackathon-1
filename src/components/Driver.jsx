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
        <h2 className="driverText">
          You rather drive and share your carillage with new people ? Tel us
          where are you going !
        </h2>
        <p className="driverText">
          Together, lets help millions of people to travel easier and make this
          your least expensive journey ever. Every week, every month. To meet
          with a loved one, or to discover a new place. With a big family, or a
          big luggage. To Paris, Amsterdam or any other European destination.
        </p>
        <button className="driverButton">Offer a ride</button>
      </div>
    </div>
  );
};

export default DriverComponent;
