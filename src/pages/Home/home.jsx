import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';
import data from '../../data/logements.json';
import banner from '../../assets/banner1.png';
import './home.scss';

function Home() {
  return (
    <>
      <Banner text="Chez vous, partout et ailleurs" img={banner} />
      <div className="kasa_cards">
        {data.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </div>
    </>
  );
}

export default Home;
