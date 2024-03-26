import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/basket">Basket</NavLink>
      <NavLink to="/detail">Details</NavLink>
    </>
  );
};

export default Header;
