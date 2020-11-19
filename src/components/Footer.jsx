import {
  logo,
  logoFacebook,
  logoLinkedin,
  logoTwitter,
  logoYoutube,
} from "./images/images";
import "./Footer.css";

function Footer() {
  return (
    <footer className="backgroundFooter">
      <div className="footerMain">
        <div className="leftArea">
          <img className="logo" src={logo} alt="Logo" />
          <p style={{ textAlign: "justify" }}>
            BlablaCalèche is the first carriage pooling solution in the word. We
            put passengers and drivers in relation to share a trip, everywhere,
            without any change.
          </p>
        </div>
        <div className="middleArea">
          <p className="footerP">CONTACT US</p>
          <p className="footerP">LEGAL</p>
          <p className="footerP">PRIVACY</p>
          <p className="footerP">CAREERS</p>
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
        <p className="footerP"> COPYRIGHT © 2020 | BLABLAGENCY</p>
      </div>
    </footer>
  );
}

export default Footer;
