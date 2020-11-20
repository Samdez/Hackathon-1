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
    <div className="profile" style={{ backgroundImage: `url(${passengerBg})` }}>
      <h1 className="profile-title">My Profile</h1>
      <hr></hr>
      <Avatar className="avatar" alt="Remy Sharp" src={avatar} />
      <h3 className="profile-name">Ernest Voltaire</h3>
      <h4 className="profile-statut">Traveler</h4>
      <div className="icon-likes">
        <img className="profile-icon" src={chat} alt="icon chat" />
        <img className="profile-icon" src={music} alt="icon music" />
        <img className="profile-icon" src={smoke} alt="icon chat" />
      </div>
      <p className="profile-speaking">
        "Looking for a ride, I don't smoke, good company"
      </p>
      <hr></hr>
      <div className="div-infos">
        <img className="profile-icon" src={mail} />
        <p className="p-infos">ernest.voltaire@vieuxmonde.com</p>
      </div>
      <div className="div-infos">
        <img className="profile-icon" src={phone} />
        <p className="p-infos">255498775</p>
      </div>
    </div>
  );
}

export default MyProfile;
