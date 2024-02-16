import Carrousel from '../../components/Carrousel/carrousel';
import './lodgement.css';
import data from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import star from '../../assets/star-active.png';
import starinactive from '../../assets/star-inactive.png';
import Collapse from '../../components/Collapse/collapse';

function Lodgement() {
  const { id } = useParams();
  const lodgement = data.find(item => item.id === id);

  return (
    <>
      <Carrousel pictures={lodgement.pictures} title={lodgement.title} />
      <div className="lodgement_bloc">
        <article className="lodgement_bloc_a">
          <div className="lodgement_title">{lodgement.title}</div>
          <span className="lodgement_location">{lodgement.location}</span>
          <div className="lodgement_tags">{lodgement.tags}</div>
        </article>
        <article className="lodgement_bloc_b">
          <div className="lodgement_name">{lodgement.host.name}</div>
          <img
            src={lodgement.host.picture}
            alt="lodgement_picture"
            className="lodgement_picture"
          />
          <div className="rating">
            {[...Array(5).keys()].map(index => {
              return (
                <img
                  src={
                    index <= parseInt(lodgement.rating) ? star : starinactive
                  }
                  key={index}
                  alt="{lodgement.rating}"
                />
              );
            })}
          </div>
        </article>
      </div>
      <Collapse title="Description" content={lodgement.description} />
      <Collapse title="Équipements" content={lodgement.equipments} />
    </>
  );
}

export default Lodgement;
