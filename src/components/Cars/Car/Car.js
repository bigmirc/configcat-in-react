import React from 'react';

const Car = ({ carImage, raceMode }) => {
  let customClass = raceMode ? `car-image ${carImage.class}` : 'car-image';
  return (
    <div className="car-container">
      <img src={carImage.link} alt={carImage.class} className={`car-image ${customClass}`}></img>
    </div>
  );
};

export default Car;
