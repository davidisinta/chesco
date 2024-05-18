import Navbar from './Navbar';
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          Logo
        </a>

        <Navbar />


      </div>
    </header>
  );
};

export default Header;