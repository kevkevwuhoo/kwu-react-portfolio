import React from 'react';
import './style.css';

const SubHeader = ({ text }) => {
  return (
    <div className='subheader'>
      <div className='text'>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default SubHeader;
