import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  subheader: {
    padding: '30px',
    textTransform: 'uppercase',
  },
  text: {
    textShadow: '2px 2px 4px #000000',
  },
  title: {
    fontSize: '60px',
    letterSpacing: '5px',
  },
  subheaderXS: {
    textTransform: 'uppercase',
  },
  titleXS: {
    fontSize: '45px',
    letterSpacing: '5px',
  },
});

const SubHeader = ({ text }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px');

  return (
    <Grid
      container
      className={matches ? classes.subheader : classes.subheaderXS}
    >
      <Grid item className={classes.text}>
        <Typography
          component='h3'
          className={matches ? classes.title : classes.titleXS}
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SubHeader;
