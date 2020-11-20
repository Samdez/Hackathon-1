import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import './navbar.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Box from "@material-ui/core/Box";

import { user, carriage, logo } from "./images/images";
import { Grid, Menu } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Box bgcolor="#FFFFFF">
          <Toolbar>
            <div>
              {/* <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className='hide'
              >
                <MenuIcon />
              </Button> */}
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <NavLink tag={Link} to="/">
                <MenuItem onClick={handleClose}>Home</MenuItem>
                </NavLink>
                <MenuItem onClick={handleClose}>
                  <NavLink tag={Link} to="/myprofile">
                    My Profile
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink tag={Link} to="/trip">
                    Drive
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
              </Menu>
            </div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="black"
              aria-label="menu"
            ></IconButton>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <NavLink tag={Link} to="/">
                <Button tag={Link} variant="h6" className={classes.title}>
                  <img
                    height="100%"
                    width={90}
                    src={logo}
                    alt="logo icon navbar"
                  />
                </Button>
              </NavLink>
              <div>
              <NavLink tag={Link} to="/myprofile">
                <Button color="grey">
                  <img
                    height="100%"
                    width={30}
                    src={user}
                    alt="user icon navbar"
                  />
                </Button>
              </NavLink>
              <NavLink tag={Link} to="/trip">
                <Button color="grey">
                  <img
                    height="100%"
                    width={30}
                    src={carriage}
                    alt="carriage icon navbar"
                  />
                </Button>
              </NavLink>
              </div>
            </Grid>
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  );
}
