import images from "../../constants/images";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <h5 className="p__cormorant">{title}</h5>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
