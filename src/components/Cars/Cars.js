import React from 'react';
import { useState } from 'react';
import Car from './Car/Car';
import images from '../../utils/images';
import mySdkKey from '../../utils/mySdkKey';
import * as configcat from 'configcat-js';
import RaceStatus from '../RaceStatus/RaceStatus';

const Cars = () => {
  const [raceMode, setRaceMode] = useState(false);

  const handleValue = () => {
    configCatClient.getValueAsync('isMyFirstFeatureEnabled', false).then((value) => {
      setRaceMode(value);
    });
  };

  let configCatClient = configcat.createClientWithAutoPoll(mySdkKey, {
    pollIntervalSeconds: 20,
    configChanged: () => {
      handleValue();
      console.log('My feature flag value has changed!');
    },
  });

  handleValue();
  return (
    <>
      <div className="cars-container">
        {images.map((image) => (
          <Car carImage={image} key={image.link} raceMode={raceMode}></Car>
        ))}
      </div>
      <div className="finish-line"></div>
      <RaceStatus raceMode={raceMode}></RaceStatus>
    </>
  );
};

export default Cars;
