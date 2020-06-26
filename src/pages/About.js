import React from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import me from '../assets/images/me.jpg';
import SubHeader from '../components/SubHeader';

const styles = {
  card: {
    marginTop: '40px',
    borderStyle: 'solid',
    borderWidth: '2px',
  },
  image: {
    height: 0,
    paddingTop: '100%',
  },
};

function About() {
  return (
    <div className='about' id='about'>
      <SubHeader text='About me' />
      <Grid container justify='center' alignItems='center' spacing={3}>
        <Grid item xs={12} md={6}>
          <Card style={styles.card}>
            <CardMedia style={styles.image} image={me} title='Kevin' />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3>I love food, puzzles, games, and most importantly, learning.</h3>
          <br />
          <p>
            My drive to learn allows me to be flexible and pushes me to
            constantly improve myself.
          </p>
          <br />
          <p>
            I started coding as a creative outlet, but I found myself lost in
            hour-long sessions fascinated by new techniques and new
            technologies.
          </p>
          <br />
          <p>
            My aptitude for problem solving means I am diligent and willing to
            put in time and effort to produce functional and beautiful products.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
