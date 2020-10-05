import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: '-webkit-sticky',
    position: 'sticky',
    top: 0,
  },
});

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        <Tab component={Link} smooth to='/#about' value='About' label='About' />
        <Tab
          component={Link}
          smooth
          to='/#skills'
          value='Skills'
          label='Skills'
        />
        <Tab
          component={Link}
          smooth
          to='/#projects'
          value='Projects'
          label='Projects'
        />
      </Tabs>
    </Paper>
  );
}
