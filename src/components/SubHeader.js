import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  subheader: {
    padding: '30px',
    textTransform: 'uppercase',
    '@media (max-width:600px)': {
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
  text: {
    textShadow: '2px 2px 4px #000000',
  },
  title: {
    fontSize: '3.0rem',
    letterSpacing: '5px',
    '@media (max-width:600px)': {
      fontSize: '2.6rem',
    },
  },
});

const SubHeader = ({ text }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.subheader}>
      <Grid item className={classes.text}>
        <Typography component='h3' className={classes.title}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SubHeader;
