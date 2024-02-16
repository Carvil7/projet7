import './banner.css';

function Banner({ text, img }) {
  return (
    <div className="kasa_banner">
      <img src={img} alt="banniere" />
      <h1 className="kasa_text">{text}</h1>
    </div>
  );
}

export default Banner;
