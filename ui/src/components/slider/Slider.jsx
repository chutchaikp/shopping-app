import { useState } from 'react';
import { MdEast, MdWest } from 'react-icons/md';
import './slider.scss';
const Slider = () => {
  const [slideX, setSlideX] = useState(0);

  const onSlide = (step) => {
    debugger;
    // move left
    if (step === 100) {
      if (slideX === 200) {
        setSlideX(0);
      } else {
        setSlideX(slideX + 100);
      }
    }
    // right
    if (step === -100) {
      if (slideX === 0) {
        setSlideX(200);
      } else {
        setSlideX(slideX - 100);
      }
    }
  };

  const data = [
    'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${slideX}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={() => onSlide(100)}>
          <MdWest />
        </div>
        <div className="icon" onClick={() => onSlide(-100)}>
          <MdEast />
        </div>
      </div>
    </div>
  );
};
export default Slider;
