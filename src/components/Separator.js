import React from 'react';
import { Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  divider: {
    marginTop: '40px',
  },
});

const Separator = () => {
  const classes = useStyles();

  return (
    <Box className={classes.divider}>
      <Divider variant='middle' />
    </Box>
  );
};

export default Separator;
