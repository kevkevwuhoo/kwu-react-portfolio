import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import me from '../assets/images/me.jpg';
import SubHeader from '../components/SubHeader';
import Separator from '../components/Separator';

const useStyles = makeStyles({
  card: {
    borderStyle: 'solid',
    borderWidth: '2px',
    maxHeight: '50vh',
    width: 'auto',
  },
  image: {
    height: 0,
    paddingTop: '100%',
  },
  bold: {
    fontWeight: 'bolder',
  },
});

function About() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className='about' id='about'>
        <SubHeader text='About me' />
        <Grid container justify='center' alignItems='center' spacing={3}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardMedia className={classes.image} image={me} title='Kevin' />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component='h3' paragraph className={classes.bold}>
              I love food, puzzles, games, and most importantly, learning.
            </Typography>
            <Typography component='p' paragraph>
              My drive to learn allows me to be flexible and pushes me to
              constantly improve myself.
            </Typography>
            <Typography component='p' paragraph>
              I started coding as a creative outlet, but I found myself lost in
              hour-long sessions fascinated by new techniques and new
              technologies.
            </Typography>
            <Typography component='p' paragraph>
              My aptitude for problem solving means I am diligent and willing to
              put in time and effort to produce functional and beautiful
              products.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Separator />
    </React.Fragment>
  );
}

export default About;
