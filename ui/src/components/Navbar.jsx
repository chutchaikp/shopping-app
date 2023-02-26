import { IconContext } from 'react-icons';
import {
  MdFavorite,
  MdPerson,
  MdSearch,
  MdShoppingBag,
  MdShoppingCart,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="items">
            <div className="item">
              <select name="" id="">
                <option value="">🇺🇸</option>
                <option value="">🇹🇭</option>
              </select>
            </div>
            <div className="item">
              <select name="" id="">
                <option value="">USD</option>
                <option value="">THB</option>
              </select>
            </div>
            <div className="item">
              <Link to="/products/woman">Woman</Link>
            </div>
            <div className="item">
              <Link to="/products/man">Man</Link>
            </div>
            <div className="item">
              <Link to="/products/children">Children</Link>
            </div>
          </div>
        </div>
        <div className="center">
          <Link to="/">My Store</Link>
        </div>
        <div className="right">
          <div className="items">
            <div className="item">
              <Link to="/home">Homepage</Link>
            </div>
            <div className="item">
              <Link to="/about">About</Link>
            </div>
            <div className="item">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="item">
              <Link to="/store">Store</Link>
            </div>
          </div>

          <IconContext.Provider value={{ size: '44px', color: '#5555ff' }}>
            <div className="icons">
              <div className="icon">
                <MdSearch />
              </div>
              <div className="icon">
                <MdPerson />
              </div>
              <div className="icon">
                <MdFavorite />
              </div>
              <div className="icon cart">
                <MdShoppingCart />
                <div className="counter"> 3 </div>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
