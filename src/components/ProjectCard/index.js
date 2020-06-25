import React from 'react';
import { makeStyles, Card, CardActionArea, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '350px',
  },
  media: {
    height: '350px',
  },
});

const ProjectCard = ({ href, src, alt }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={href} target='_blank'>
        <CardMedia
          component='img'
          className={classes.media}
          image={src}
          title={alt}
        />
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
