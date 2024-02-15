import "./ErrorPage.css";
import { Link } from "react-router-dom";
import sadDog from "../assets/images/Take-me-home.gif";
import homeIcon from "../assets/images/home.png";

export default function ErrorPage({ errorMessage }) {
  const message = errorMessage || "Page not found."; // show customized error message for a specific page. If not, fall back to the default msg "Page not found."
  return (
    <div className="error-page-container">
      <h1>Woofsy daisy, something went wrong...</h1>
      <h2>{message}</h2>
      <Link to="/adoptable">
        <img src={homeIcon} className="home-icon" />
      </Link>
      <img className="sad-dog" src={sadDog} />
    </div>
  );
}
