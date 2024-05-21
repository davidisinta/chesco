import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div className="nav-area">

          <Link to="/" className="logo">
              <img src={`${process.env.PUBLIC_URL}/chesco_logo.jpg`} alt="chesco app logo" className={"navbar-logo"}/>
          </Link>

          <Navbar/>

          <MobileNav />


      </div>
    </header>
  );
};

export default Header;