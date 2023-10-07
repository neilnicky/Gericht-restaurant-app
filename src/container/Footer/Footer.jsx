import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="footer_main app__bg">
    <Newsletter />
    <div className="footer__content">
      <div className="footer__contactus">
        <h3 className="footer__headtext">Contact Us</h3>
        <p className="p__opensans">9W 53rd St, New York, NY 10098, USA</p>
        <p className="p__opensans">+1 212-2323-1234</p>
        <p className="p__opensans">+1 212-4323-8733</p>
      </div>

      <div className="footer__gericht">
        <img src={images.gericht} alt="geritch" className="gericht__img" />
        <p className="p__opensans">
          {`"`}The best way to find yourself is to lose yourself in the service
          of others.{`"`}
        </p>
        <img src={images.spoon} alt="spoon" className="spooon"/>
        <div className="footer__gericht-social">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="footer__workinghours">
        <h3 className="footer__headtext">Working Hours</h3>
        <p  className="p__opensans">Monday-Friday:</p>
        <p  className="p__opensans">08:00am - 12:00am</p>
        <p  className="p__opensans" >Saturday-Sunday:</p>
        <p  className="p__opensans">08:00am - 12:00am</p>
      </div>
    </div>
    <div className="footer__rightsreserved">
      <p  className="p__opensans " >2021 Gericht, All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
