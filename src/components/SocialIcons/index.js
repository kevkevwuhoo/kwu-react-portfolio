import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '20px',
  },
  icon: {
    color: '#f6f6f6',
    fontSize: '30px',
  },
});

const SocialIcons = () => {
  const classes = useStyles();

  return (
    <Box className={classes.button}>
      <IconButton
        aria-label='github'
        target='_blank'
        href='https://github.com/kevkevwuhoo'
      >
        <GitHubIcon id='github' className={classes.icon} />
      </IconButton>
      <IconButton
        aria-label='linkedin'
        target='_blank'
        href='https://www.linkedin.com/in/kevinwu5389/'
      >
        <LinkedInIcon id='linkedin' className={classes.icon} />
      </IconButton>
      <IconButton aria-label='email' href='mailto:kwu3@villanova.edu'>
        <EmailIcon id='email' className={classes.icon} />
      </IconButton>
    </Box>
  );
};

export default SocialIcons;
