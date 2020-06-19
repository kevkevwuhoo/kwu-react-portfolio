import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import './style.css';

const SocialIcons = () => {
  return (
    <div className='icon-buttons'>
      <IconButton
        aria-label='github'
        target='_blank'
        href='https://github.com/kevkevwuhoo'
      >
        <GitHubIcon id='github' />
      </IconButton>
      <IconButton aria-label='linkedin' target='_blank' href='#'>
        <LinkedInIcon id='linkedin' />
      </IconButton>
      <IconButton aria-label='email' href='mailto:kwu3@villanova.edu'>
        <EmailIcon id='email' />
      </IconButton>
    </div>
  );
};

export default SocialIcons;
