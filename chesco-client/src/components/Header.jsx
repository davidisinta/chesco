import Navbar from './Navbar';
import Dropdown from "./Dropdown";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">

          <Link to="/" className="logo">
              <img src={`${process.env.PUBLIC_URL}/chesco_logo.jpg`} alt="chesco app logo" className={"navbar-logo"}/>
          </Link>

          <Navbar/>


      </div>
    </header>
  );
};

export default Header;