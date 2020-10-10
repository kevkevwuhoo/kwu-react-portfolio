import React from 'react';
import {
  makeStyles,
  Card,
  CardMedia,
  Box,
  Typography,
  IconButton,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    '&:hover h4': {
      display: 'none',
    },
    '&:hover img': {
      opacity: 1,
    },
    '&:hover .makeStyles-card-23': {
      top: 0,
    },
  },
  card: {
    border: '4px solid black',
    position: 'relative',
    top: '44px',
    transition: 'top 0.5s',
    zIndex: 5,
  },
  title: {
    zIndex: 10,
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '1.3rem',
    textAlign: 'center',
    border: '1px solid black',
    color: 'black',
    padding: '5px',
    background: 'rgba(255,255,255, 0.8)',
  },
  media: {
    height: '350px',
    opacity: 0.3,
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
});

const ProjectCard = ({ repo, demo, src, alt }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Typography component='h4' variant='button' className={classes.title}>
          {alt}
        </Typography>
        <Card className={classes.card}>
          <CardMedia
            component='img'
            className={classes.media}
            image={src}
            title={alt}
          />
        </Card>
        <Box className={classes.buttonBox}>
          <IconButton aria-label='github-repo' href={repo} target='_blank'>
            <GitHubIcon fontSize='small' />
          </IconButton>
          <IconButton aria-label='app-demo' href={demo} target='_blank'>
            <ExitToAppIcon fontSize='small' />
          </IconButton>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProjectCard;
