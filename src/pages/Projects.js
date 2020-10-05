import React from 'react';
import SubHeader from '../components/SubHeader';
import ProjectCard from '../components/ProjectCard';
import { Container, Grid, Divider } from '@material-ui/core';
import Touristee from '../assets/images/projects/touristee.png';
import EmployeeSummary from '../assets/images/projects/employee-summary.png';
import WeatherDashboard from '../assets/images/projects/weather-dashboard.png';
import WorkDayScheduler from '../assets/images/projects/work-day-scheduler.png';
import WorkoutTracker from '../assets/images/projects/workout-tracker.png';

const Projects = () => {
  return (
    <React.Fragment>
      <Container className='projects' id='projects'>
        <SubHeader text='Projects' />
        <Grid container justify='center' alignItems='center' spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              href='https://github.com/kevkevwuhoo/touristee'
              src={Touristee}
              alt='Touristee'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              href='https://github.com/kevkevwuhoo/employee-summary'
              src={EmployeeSummary}
              alt='Employee Summary'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              href='https://github.com/kevkevwuhoo/weather-dashboard'
              src={WeatherDashboard}
              alt='Weather Dashboard'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              href='https://github.com/kevkevwuhoo/work-day-scheduler'
              src={WorkDayScheduler}
              alt='Work Day Scheduler'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              href='https://github.com/kevkevwuhoo/workout-tracker'
              src={WorkoutTracker}
              alt='Workout Tracker'
            />
          </Grid>
        </Grid>
      </Container>
      <Divider variant='middle' />
    </React.Fragment>
  );
};

export default Projects;
