import { Link } from "react-router-dom";
import logo from "../../../assets/pass_protector_logo.png";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img src={logo} alt="My Password Manager Logo" className="logo" />
        </Link>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                LogIn
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/secure-notes" className="nav-link">
                Secure Notes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signout" className="nav-link">
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
