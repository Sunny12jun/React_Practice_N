import img from "../Images/food.jpg";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={img}></img>
    </a>
  );
};

export const Header = () => {
  return (
    <div>
      <div className="header">
        <Title />
        <div>
          <h1> foodilicious </h1>
        </div>
        <div className="nav-items">
          <ul>
            <Link className="" to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"About"}>
              <li>About</li>
            </Link>
            <Link to={"ContactUs"}>
              <li>Contact Us</li>
            </Link>
            <Link to={"/"}>
              <li>Cart</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
