import { Button, Typography } from "@material-ui/core";
import React from "react";

const driverComponent = () => {
  return (
    <div>
      <div>
        <h2>Vous prenez le volant ? Dites-nous où vous allez !</h2>
        <Typography>Ensemble, permettons à des millions de personnes de se déplacer.</Typography>
        <Button>Proposer un trajet</Button>
      </div>
    </div>
  );
};

export default driverComponent;
