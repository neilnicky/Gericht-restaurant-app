import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content-1">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          at fugiat autem? Officia obcaecati voluptatibus minima quisquam quas
          iusto pariatur? Nesciunt rerum nobis cupiditate porro dicta quaerat
          corrupti illum illo!
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content-img flex__center">
        <img src={images.knife} alt="knife" className="app__aboutus-img-2" />
      </div>

      <div className="app__aboutus-content-2">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          at fugiat autem? Officia obcaecati voluptatibus minima quisquam quas
          iusto pariatur? Nesciunt rerum nobis cupiditate porro dicta quaerat
          corrupti illum illo!
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
