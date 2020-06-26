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
import Skills from '../components/Skills';

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
      <SubHeader text='About' />
      <Grid container justify='center' alignItems='center' spacing={3}>
        <Grid item xs={12} md={6}>
          <Card style={styles.card}>
            <CardHeader title='Kevin Wu' subheader='December 30, 1997' />
            <CardMedia style={styles.image} image={me} title='Kevin' />
            <CardContent>
              <Typography component='h1'>
                Hello, my name is Kevin Wu.
              </Typography>
              <Typography variant='body2' color='textPrimary' component='p'>
                I graduated from Villanova University with a degree in
                Mechanical Engineering. Some of my hobbies include gaming,
                drawing, and now coding! I am currently based in New York City.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Skills />
    </div>
  );
}

export default About;
