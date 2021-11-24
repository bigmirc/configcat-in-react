import React from 'react';
import flag from '../../images/checkered-flag.png';

const Header = () => {
  return (
    <div className="header">
      RACE TIME
      <img src={flag} alt="flag" className="flag"></img>
    </div>
  );
};

export default Header;
