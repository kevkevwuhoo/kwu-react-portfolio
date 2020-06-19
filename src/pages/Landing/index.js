import React from 'react';
import './style.css';
import SocialIcons from '../../components/SocialIcons';

const Landing = () => {
  return (
    <div className='container'>
      <div className='bg-img'>
        <div className='title'>
          <h1>KEVIN WU</h1>
          <h2>Full stack developer. NYC.</h2>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Landing;
