import "./nav.css";
import { Home, User, Settings } from "lucide-react"; // Import icons
import finx from "../../assets/finx.png"; // Import the image properly

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo-image" src={finx} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#" className="nav-item" data-tooltip="Home">
            <Home size={24} />
          </a>
        </li>
        <li>
          <a href="#" className="nav-item" data-tooltip="Profile">
            <User size={24} />
          </a>
        </li>
        <li>
          <a href="#" className="nav-item" data-tooltip="Settings">
            <Settings size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
