import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SubHeader from '../components/SubHeader';
import TechStack from '../components/TechStack';
import Separator from '../components/Separator';

const useStyles = makeStyles({
  container: {
    paddingTop: '48px',
    paddingBottom: '24px',
  },
});

const Skills = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.container} id='skills'>
        <SubHeader text='Skills & Experience' />
        <TechStack />
      </Container>
      <Separator />
    </React.Fragment>
  );
};

export default Skills;
