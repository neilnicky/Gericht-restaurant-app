import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Findus.css";

const FindUs = () => {
  return (
    <div className="app__findus app__bg" id="contact">
      <div className="app__findus_content">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2.5rem 0 1rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00am - 02:00</p>
        <p className="p__opensans">Sat - Sun: 10:00am - 03:00</p>

        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Visit Us
        </button>
      </div>
      <div className="app__findus_img">
        <img src={images.findus} alt="cocktail" />
      </div>
    </div>
  );
};

export default FindUs;
