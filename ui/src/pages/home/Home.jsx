import Slider from '../../components/slider/Slider';
import FeaturedProduct from '../../components/featuredProduct/FeaturedProduct.jsx';
import './home.scss';
const Home = () => {
  return (
    <div className="home">
      {/* <h1> Home </h1> */}

      <Slider />

      <FeaturedProduct />
    </div>
  );
};
export default Home;
