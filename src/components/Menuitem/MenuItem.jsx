import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="menuitem">
    <div className="menuitem-item">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <div className="flex">
        <div className="menuitem-dash" />
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    <div className="menuitem-tag">
      <p className="p__opensans" style={{ color: "#AAAAAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
