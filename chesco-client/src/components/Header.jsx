import Navbar from './Navbar';
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
          <a href="/">
              <img src={`${process.env.PUBLIC_URL}/chesco_logo.jpg`} alt="chesco app logo" className={"navbar-logo"} />
          </a>

          <Navbar/>


      </div>
    </header>
  );
};

export default Header;