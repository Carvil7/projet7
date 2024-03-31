import './banner.css';

function Banner({ text, img, large = false }) {
  return (
    <div className={large ? 'kasa_banner large' : 'kasa_banner'}>
      <img src={img} alt="banniere" />
      <h1 className="kasa_text">{text}</h1>
    </div>
  );
}

export default Banner;
