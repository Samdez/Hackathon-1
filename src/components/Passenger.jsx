import React from "react";
import { logo } from "./images";

import "./Passenger.css";

function PassengerComponent() {
  return (
    <div className="passengerBg">
      <img className="mainLogo" src={logo} alt="" />
      <h1>Passengers, welcome on BlaBlaCalèche.</h1>
      <p className="p-passenger">Share a carriage where ever you want !</p>
      <p className="p-passenger">Let's go for a ride !</p>
    </div>
  );
}

export default PassengerComponent;
