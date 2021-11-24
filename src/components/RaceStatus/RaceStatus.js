import React from 'react';

const RaceStatus = ({ raceMode }) => {
  let raceStatus;
  raceStatus = raceMode ? 'green-light' : 'red-light';
  return <div className={raceStatus}>{raceStatus}</div>;
};

export default RaceStatus;
