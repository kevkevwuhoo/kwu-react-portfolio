import React from 'react';
import {
  makeStyles,
  Card,
  CardMedia,
  Button,
  Box,
  Typography,
  IconButton,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    '&:hover a': {
      display: 'inline-block',
    },
    '&:hover h4': {
      display: 'none',
    },
    '&:hover img': {
      opacity: 1,
    },
  },
  card: {
    border: '4px solid black',
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
    opacity: 0.5,
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: '5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  button: {
    display: 'none',
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
          <IconButton
            aria-label='github-repo'
            className={classes.button}
            href={repo}
            target='_blank'
          >
            <GitHubIcon fontSize='large' />
          </IconButton>
          <IconButton
            aria-label='app-demo'
            className={classes.button}
            href={demo}
            target='_blank'
          >
            <ExitToAppIcon fontSize='large' />
          </IconButton>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProjectCard;
