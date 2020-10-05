import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  skills: {
    margin: '5px',
  },
  label: {
    fontStyle: 'italic',
  },
});

const TechStack = () => {
  const classes = useStyles();

  return (
    <Container className='skills' className={classes.skills}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <h2 className={classes.label}>Frontend</h2>
          <p>ReactJS, HTML, CSS, AJAX, jQuery, D3</p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h2 className={classes.label}>Backend</h2>
          <p>NodeJS, JavaScript, ExpressJS</p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h2 className={classes.label}>Other</h2>
          <p>Webpack, Git, Jest, ES6</p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TechStack;
