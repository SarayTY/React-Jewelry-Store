import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = ({ user, cartItems }) => {
  return (
    <nav
      className="navbar text-center navbar-expand-sm navbar-dark bg-dark shadow-sm"
      aria-label="Third navbar example"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Jewelry <i className="bi bi-gem"></i> Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          {/* left side of the nav bar */}
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                Products Shop
              </NavLink>
            </li>
            {user?.biz && (
              <>
                {" "}
                <li className="nav-item">
                  <NavLink to="/myCards" className="nav-link">
                    My Cards
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/createNewBizCard" className="nav-link">
                    Create a new card
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {/* right side of the nav bar */}
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="cart-icon">
              <NavLink to="/cart">
                <i className="bi bi-cart"></i>
                <span>{cartItems.length}</span>
              </NavLink>
            </li>
            {user ? (
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/signin" className="nav-link">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="signup" className="nav-link">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="signup-biz" className="nav-link">
                    Sign Up Business
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
