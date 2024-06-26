import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <div>
      <Link className={`link ${pathname === '/' && 'active'}`} to="/">
        Accueil
      </Link>
      <Link className={`link ${pathname === '/about' && 'active'}`} to="/about">
        A Propos
      </Link>
    </div>
  );
}

export default Navbar;
