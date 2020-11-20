import {
  logo,
  logoFacebook,
  logoLinkedin,
  logoTwitter,
  logoYoutube,
} from "./images/images";
import "./Footer.css";
import { theme } from '../App'
import { Typography } from "@material-ui/core";

function Footer() {
  return (
    <footer className="backgroundFooter">
      <div className="footerMain">
        <div className="leftArea">
          <img className="logo" src={logo} alt="Logo" />
          <Typography style={{ textAlign: "justify" }} >
            BlablaCalèche is the first carriage pooling solution in the word. We
            put passengers and drivers in relation to share a trip, everywhere,
            without any change.
          </Typography>
        </div>
        <div className="middleArea">
          <Typography className="footerP">CONTACT US</Typography>
          <Typography className="footerP">LEGAL</Typography>
          <Typography className="footerP">PRIVACY</Typography>
          <Typography className="footerP">CAREERS</Typography>
        </div>
        <div className="rightArea">
          <div>
            <img src={logoFacebook} alt="Logo" />
          </div>
          <div>
            <img src={logoLinkedin} alt="Logo" />
          </div>
          <div>
            <img src={logoTwitter} alt="Logo" />
          </div>
          <div>
            <img src={logoYoutube} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="baselineArea">
        <Typography className="footerP"> COPYRIGHT © 2020 | BLABLAGENCY</Typography>
      </div>
    </footer>
  );
}

export default Footer;
