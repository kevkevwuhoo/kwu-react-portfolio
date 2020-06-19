import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const SocialIcons = () => {
  return (
    <div className='icon-buttons'>
      <IconButton aria-label='github' href='#'>
        <GitHubIcon />
      </IconButton>
      <IconButton aria-label='linkedin' href='#'>
        <LinkedInIcon />
      </IconButton>
      <IconButton aria-label='email' href='#'>
        <EmailIcon />
      </IconButton>
    </div>
  );
};

export default SocialIcons;
