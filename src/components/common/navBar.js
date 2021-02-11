import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, AppBar, Toolbar, Avatar } from '@material-ui/core';
import logo from '../../assets/logos/wellness-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions/userActions';
import { getInitials } from '../../helpers/helperFunctions';

const styles = makeStyles(theme => ({
  buttonFontSize: {
    fontSize: '11px',
    color: theme.palette.grey[200],
  },

  AppBar: {
    backgroundColor: theme.palette.common.white,
    backgroundSize: 'cover',
  },

  logo: {
    height: '100%',
    borderRadius: 0,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },

  loginButton: {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    borderRadius: '25px',
    padding: '0px 25px',

    '&:hover': {
      background: theme.palette.secondary.hover,
      boxShadow: '0px 2px 10px #888',
    },
  },
}));

const NavBar = () => {
  const classes = styles();
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const userName = useSelector(state => state.users.userData.name);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <AppBar position="static" color="default" className={classes.AppBar}>
      <Grid item>
        <Toolbar className="justify-content-between">
          <Link to="/">
            <Button className={classes.mainLogo}>
              <Avatar src={logo} className={classes.logo} />
            </Button>
          </Link>
          <div>
            <Grid container spacing={3} alignItems="center">
              {isLoggedIn && (
                <Grid item>
                  <Avatar className={classes.avatar}>
                    {getInitials(userName)
                      .reduce((a, b) => a + b, '')
                      .substr(0, 2)}
                  </Avatar>
                </Grid>
              )}
              <Grid item>
                <Button
                  color="inherit"
                  className={`${classes.buttonFontSize}, ${classes.loginButton}`}
                  onClick={() => {
                    isLoggedIn ? dispatch(logOut()) : history.push('/login');
                  }}
                >
                  {isLoggedIn ? 'Logout' : 'Login'}
                </Button>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
