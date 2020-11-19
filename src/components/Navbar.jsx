import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";

import { user, carriage } from "./images/index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Box display="flex" justifyContent="center">
              BlaBlaCalèche
            </Box>
          </Typography>
          <Box>
            <Button color="inherit">
              <img height="50%" width={50} src={user} alt="user icon navbar" />
            </Button>
            <Button color="inherit">
              <img
                height="50%"
                width={50}
                src={carriage}
                alt="carriage icon navbar"
              />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
