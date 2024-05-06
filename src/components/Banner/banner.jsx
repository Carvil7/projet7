import './banner.scss';

function Banner({ text, img, large = false }) {
  return (
    <div className={large ? 'kasa_banner large' : 'kasa_banner'}>
      <img src={img} alt="banniere" />
      <h1 className="kasa_text" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

export default Banner;
