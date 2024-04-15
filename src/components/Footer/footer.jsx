import logo from '../../assets/logo_light.png';
import './footer.scss';

function Footer() {
  return (
    <footer className="kasa_footer">
      <img src={logo} alt="Logo" />
      <div className="kasa_footer_text">© 2020. Kasa All rights reserved</div>
    </footer>
  );
}

export default Footer;
