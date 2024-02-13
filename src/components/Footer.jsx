import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <ul>
          <li>
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </li>
          <Link to="/contact">
            <li className="contact-us">Contact us</li>
          </Link>
          <li className="social-media">
            <Link to="https://www.facebook.com/?locale=es_LA" target="_blank">
              <FaFacebook />
            </Link>
          </li>
          <li className="social-media">
            <Link to="https://www.instagram.com/" target="_blank">
              <FaInstagramSquare />
            </Link>
          </li>
          <Link to="/FAQs">
            <li>FAQs</li>
          </Link>
        </ul>
      </footer>
    </>
  );
}
