import './card.css';
import { Link } from 'react-router-dom';

function Card({ item }) {
  return (
    <article className="kasa_card">
      <Link to={`/lodgement/${item.id}`}>
        <div className="kasa_card_image_text">
          <img src={item.cover} alt={item.title} />
          <div className="kasa_card_title">
            <h2>{item.title}</h2>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Card;
