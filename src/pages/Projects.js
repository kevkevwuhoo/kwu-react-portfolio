import React from 'react';
import SubHeader from '../components/SubHeader';
import ProjectCard from '../components/ProjectCard';
import { Grid } from '@material-ui/core';
import Touristee from '../assets/images/projects/touristee.png';
import EmployeeSummary from '../assets/images/projects/employee-summary.png';
import WeatherDashboard from '../assets/images/projects/weather-dashboard.png';
import WorkDayScheduler from '../assets/images/projects/work-day-scheduler.png';
import WorkoutTracker from '../assets/images/projects/workout-tracker.png';

const Projects = () => {
  return (
    <div className='projects'>
      <SubHeader text='Projects' />
      <Grid container>
        <Grid item>
          <ProjectCard src={Touristee} alt='Touristee' />
        </Grid>
        <Grid item>
          <ProjectCard src={EmployeeSummary} alt='Employee Summary' />
        </Grid>
        <Grid item>
          <ProjectCard src={WeatherDashboard} alt='Weather Dashboard' />
        </Grid>
        <Grid item>
          <ProjectCard src={WorkDayScheduler} alt='Work Day Scheduler' />
        </Grid>
        <Grid item>
          <ProjectCard src={WorkoutTracker} alt='Workout Tracker' />
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
