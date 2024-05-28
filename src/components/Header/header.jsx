import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import logo from '../../assets/logo1.png';
import './header.scss';

function Header() {
  return (
    <div className="header_kasa">
      <Link to="/">
        <img src={logo} alt="Logo website" />
      </Link>
      <Navbar />
    </div>
  );
}

export default Header;
