import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: '-webkit-sticky',
    // eslint-disable-next-line
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
});

const NavLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(false);

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
        <Tab
          component={NavLink}
          smooth
          to='/#about'
          value='About'
          label='About'
        />
        <Tab
          component={NavLink}
          smooth
          to='/#skills'
          value='Skills'
          label='Skills'
        />
        <Tab
          component={NavLink}
          smooth
          to='/#projects'
          value='Projects'
          label='Projects'
        />
      </Tabs>
    </Paper>
  );
}
