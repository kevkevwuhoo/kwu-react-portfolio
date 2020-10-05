import React from 'react';
import { Container } from '@material-ui/core';
import SubHeader from '../components/SubHeader';
import TechStack from '../components/TechStack';
import Separator from '../components/Separator';

const Skills = () => {
  return (
    <React.Fragment>
      <Container className='skills' id='skills'>
        <SubHeader text='Skills & Experience' />
        <TechStack />
      </Container>
      <Separator />
    </React.Fragment>
  );
};

export default Skills;
