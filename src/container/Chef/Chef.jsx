import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Chef.css";

const Chef = () => (
  <div className="chef_main app__bg">
    <div className="chef_img">
      <img src={images.chef} alt="chef"  />
    </div>

    <div className="chef_content">
      <SubHeading title="Chef's Word" />
      <h2 className="headtext__cormorant">What We Believe In</h2>

      <div className="chef_quote">
        <div className="chef_quote_p">
          <img src={images.quote} alt="quotation" className="chef_quote_img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consect.
          </p>
        </div>
        <p className="p__opensans">
          Iste sequi soluta expedita non cumque, odit impedit consequuntur et
          veritatis quibusdam recusandae eum eligendi asperiores atque deserunt
          vel, facilis, nemo magni! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Volus, delectus odit possimus
          architecto.
        </p>
      </div>

      <h4>Kevin Luo</h4>
      <p className="p__opensans">Chef & Founder</p>
      <img
        src={images.sign}
        alt="sign"
        className="chef_sign_img"
        width="200px"
      />
    </div>
  </div>
);

export default Chef;


