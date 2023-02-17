import img from "../Images/food.jpg";

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
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
