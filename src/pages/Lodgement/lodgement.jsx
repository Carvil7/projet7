import Carrousel from '../../components/Carrousel/carrousel';
import './lodgement.css';
import data from '../../data/logements.json';
import { useParams, useNavigate } from 'react-router-dom';
import star from '../../assets/star-active.png';
import starinactive from '../../assets/star-inactive.png';
import Collapse from '../../components/Collapse/collapse';
import { useEffect } from 'react';

function Lodgement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lodgement = data.find(item => item.id === id);

  useEffect(() => {
    if (!lodgement) {
      navigate('/error');
    }
  });
  if (!lodgement) {
    return '/error';
  }

  return (
    <>
      <Carrousel pictures={lodgement.pictures} title={lodgement.title} />
      <div className="lodgement_bloc">
        <article className="lodgement_bloc_a">
          <div className="lodgement_title">{lodgement.title}</div>
          <span className="lodgement_location">{lodgement.location}</span>
        </article>
        <article className="lodgement_bloc_b">
          <div className="lodgement_name_picture">
            <div className="lodgement_name">{lodgement.host.name}</div>
            <img
              src={lodgement.host.picture}
              alt="lodgement_picture"
              className="lodgement_picture"
            />
          </div>
        </article>
      </div>
      <div className="lodgement_bloc">
        <div className="lodge_tags">
          {lodgement.tags.map(tag => {
            return (
              <span key={tag} className="lodgement_tags">
                {tag}
              </span>
            );
          })}
        </div>
        <div className="rating">
          {[...Array(5).keys()].map(index => {
            return (
              <img
                src={index <= parseInt(lodgement.rating) ? star : starinactive}
                key={index}
                alt="{lodgement.rating}"
              />
            );
          })}
        </div>
      </div>
      <div className="collapse_lodgement">
        <div className="collapse_descr">
          <Collapse title="Description" content={lodgement.description} />
        </div>
        <div className="collapse_equip">
          <Collapse title="Équipements" content={lodgement.equipments} />
        </div>
      </div>
    </>
  );
}

export default Lodgement;
