import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Box from "@material-ui/core/Box";

import "./NavigationDesktop.css";

import { user, logo } from "./images/index";

export default function NavigationDesktop() {
  return (
    <div>
      <AppBar position="static">
        <Box bgcolor="#FFFFFF">
          <Toolbar>
            <div className="logo">
              <Button variant="h6">
                <img
                  height="100%"
                  width={90}
                  src={logo}
                  alt="logo icon navbar"
                />
              </Button>
            </div>
            <div className="icon">
              <p>test</p>
              <Button color="grey">
                <img
                  height="100%"
                  width={30}
                  src={user}
                  alt="user icon navbar"
                />
              </Button>
            </div>
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  );
}
