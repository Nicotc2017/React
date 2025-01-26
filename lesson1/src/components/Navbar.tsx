import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <>
    <NavLink className="mx-1" to="/" end>
      Home
    </NavLink>
    <NavLink className="mx-1" to="/Products" end>
      Products
    </NavLink>
    <NavLink className="mx-1" to="/Todos" end>
      Todos
    </NavLink>
    <NavLink className="mx-1" to="/Users" end>
      Users
      </NavLink>
      <NavLink className="mx-1" to="/login" end>
        Login
      </NavLink>
    </>
  );
};

export default Navbar;
