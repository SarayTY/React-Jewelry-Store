import "../css/homePage.css";
import CardHomePage from "./Card-homePage";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="header-top">
        <div className="header-content">
          <h2>Our Brand New Collection</h2>
          <div className="line"></div>
          <h1>Unique , Exceptional , Unforgettable</h1>
          <Link className="link-button" to="/about">
            About Us
          </Link>
        </div>
      </div>

      <CardHomePage />

      <div className="header-bottom">
        <div className="ul-container ">
          <div className="first-col-li">
            <ul className="list-heading">
              <h3>Information </h3>
              <div className="line"></div>
              <li>Call us at : <a href="tel:03-1234567">03-1234567</a></li>
              <li>address: TEL-AVIV</li>
              <li>hours: 09:00 - 19:00</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
