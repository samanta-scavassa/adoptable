import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <h1 className="navbar-h1">Adoptable</h1>
      <Link to="/about">
        <p>About</p>
      </Link>
    </nav>
  );
}

export default Navbar;
