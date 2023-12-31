import "./Header.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper-info">
      <div className="app__header-content">
        <SubHeading title="Chase the new Flavour" />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="app__header-p p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="app__header-btn custom__button">
          Explore Menu
        </button>
      </div>
    </div>
    <div className="app__wrapper-img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
