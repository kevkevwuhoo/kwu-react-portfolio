import React from 'react';
import { makeStyles, Card, CardActionArea, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

const ProjectCard = ({ src, alt }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
