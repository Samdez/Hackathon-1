import { logoFacebook, logoLinkedin, logoTwitter, logoYoutube } from "./images";

// import "./Footer.css";

function Footer() {
  return (
    <footer className="backgroundFooter">
      <div className="footerMain">
        <div className="leftArea">
          <img className="logo" src={"JNJNJNNJ"} alt="Logo" />
          <p style={{ textAlign: "justify" }}>
            BlablaCalèche is the first carriage pooling solution in the word. We
            put passengers and drivers in relation to share a trip, everywhere,
            without any change.
          </p>
        </div>
        <div className="middleArea">
          <p>CONTACT US</p>
          <p>LEGAL</p>
          <p>PRIVACY</p>
          <p>CAREERS</p>
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
        <p> COPYRIGHT © 2020 | BLABLAGENCY</p>
      </div>
    </footer>
  );
}

export default Footer;
