import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Navbar/navbar';
import logo from '../../assets/logo1.png';
import './header.css';

const HomeLogo = styled.img``;

function Header() {
  return (
    <div className="header_kasa">
      <Link to="/">
        <HomeLogo src={logo} />
      </Link>
      <Navbar />
    </div>
  );
}

export default Header;
