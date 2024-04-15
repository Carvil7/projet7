import { useState } from 'react';
import './collapse.scss';
import icon from '../../assets/icon_down.png';

function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);
  const collapseActive = () => {
    setToggle(prevValue => !prevValue);
  };

  return (
    <div className="collapse_bloc">
      <div onClick={collapseActive} className="title_collapse">
        <h2>{title}</h2>
        <img
          src={icon}
          alt="down_arrow"
          className={toggle ? 'arrow_' : 'not_active'}
        />
      </div>

      <div className={toggle ? 'text_collapse act_collapse' : 'text_collapse'}>
        {Array.isArray(content) ? (
          content.map(cont => {
            return <p key={cont}>{cont}</p>;
          })
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
