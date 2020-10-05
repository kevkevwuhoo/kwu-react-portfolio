import React from 'react';
import './style.css';

const SubHeader = ({ text }) => {
  return (
    <div className='subheader'>
      <div className='text'>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default SubHeader;
