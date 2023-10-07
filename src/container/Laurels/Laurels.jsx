import "./Laurels.css";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";

const Laurels = () => (
  <div className="laurels app__bg" id="awards">
    <div className="laurels__logo">
      <img src={images.logo} alt="logo" />
    </div>

    <div className="laurels_content">
      <div>
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="flex-award">
          {data.awards.map((award, index) => (
            <div key={award.title + index} className="awards_card">
              <img src={award.imgUrl} alt="img" className="awards_card-img" />
              <div>
                <p className="p__cormorant" style={{ color: "#DCCA87" }}>
                  {award.title}
                </p>
                <p className="p__opensans">{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="laurels_img">
        <img src={images.laurels} alt="laurels"  />
      </div>
    </div>
  </div>
);

export default Laurels;



// TO BE CONTINUED 