import Error404 from '../../assets/error404.png';
import './error404.scss';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <>
      <span className="error_img">
        <img src={Error404} alt="Error" />
      </span>
      <div className="error_text">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <div className="error_link">
        <Link className="link_err" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </>
  );
}

export default Error;
