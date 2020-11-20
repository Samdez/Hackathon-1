import {
  avatar,
  mail,
  phone,
  music,
  chat,
  smoke,
  passengerBg,
} from "./images/index";
import "./MyProfile.css";

import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function MyProfile() {
  const classes = useStyles();
  return (
    <div className="profile">
      <Typography variant="h1" className="profile-title">
        My Profile
      </Typography>
      <hr></hr>
      <Avatar className="avatar" alt="Remy Sharp" src={avatar} />
      <Typography variant="h3" className="profile-name">
        Ernest Voltaire
      </Typography>
      <Typography variant="h4" className="profile-statut">
        Traveler
      </Typography>
      <div className="icon-likes">
        <img className="profile-icon" src={chat} alt="icon chat" />
        <img className="profile-icon" src={music} alt="icon music" />
        <img className="profile-icon" src={smoke} alt="icon chat" />
      </div>
      <Typography className="profile-speaking">
        "Looking for a ride, I don't smoke, good company"
      </Typography>
      <hr></hr>
      <div className="div-infos">
        <img className="profile-icon" src={mail} />
        <Typography className="p-infos">
          ernest.voltaire@vieuxmonde.com
        </Typography>
      </div>
      <div className="div-infos">
        <img className="profile-icon" src={phone} />
        <Typography className="p-infos">255498775</Typography>
      </div>
    </div>
  );
}

export default MyProfile;
