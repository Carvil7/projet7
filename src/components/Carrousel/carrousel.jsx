import { useState } from 'react';
import './carrousel.css';
import arrow_right from '../../assets/icon_right.png';
import arrow_left from '../../assets/icon-left.png';

function Carrousel({ pictures, title }) {
  const [pictureIndex, setPictureIndex] = useState(0);
  const changePicture = index => {
    let newIndex = index;
    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    } else if (newIndex > pictures.length - 1) {
      newIndex = 0;
    }
    setPictureIndex(newIndex);
  };

  if (pictures.length === 0) {
    return null;
  }

  return (
    <div className="carrousel">
      <img src={pictures[pictureIndex]} alt={title} />
      <div
        onClick={() => changePicture(pictureIndex + 1)}
        className="carrousel_arrow_right"
      >
        <img src={arrow_right} alt="arrow_right" />
      </div>
      <div
        onClick={() => changePicture(pictureIndex - 1)}
        className="carrousel_arrow_left"
      >
        <img src={arrow_left} alt="arrow_left" />
      </div>
      <div className="carrousel_counter">
        {pictureIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

export default Carrousel;
