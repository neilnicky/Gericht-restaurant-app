import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => (
  <div className="footer__newsletter app__bg  ">
    <div className="footer__newsletter-overlay">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
      <p className="p__opensans">And never miss latest updates!</p>
      <div className="footer__newsletter-email">
        <input type="email" placeholder="Email Address" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default Newsletter;
