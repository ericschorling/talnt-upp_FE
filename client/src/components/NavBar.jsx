import React from 'react';
import  { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import {useAuth0} from '@auth0/auth0-react'
import MenuBookIcon from '@material-ui/icons/MenuBook'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {isAuthenticated, logout} = useAuth0()

  const history = useLocation();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(isAuthenticated)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        {isAuthenticated && (
            <div>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to="/">
                            Home
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/profile">
                            Profile
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/leader_view">
                            Leader View
                        </Link>
                    </MenuItem> 
                </Menu>
            </div>
          )}
          {history.pathname !=="/"?
            <IconButton>
              <Link to={'/'}>
                <HomeIcon/>
              </Link>
            </IconButton>
            : null
          }
          <Typography variant="h6" className={classes.title}>
            {history.pathname ==="/"?"HOME": history.pathname.split("/").splice(-1,1)[0].split("_").join(" ").toUpperCase()}
          </Typography>
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuBookIcon />
              </IconButton>
          <FormGroup>
          <FormControlLabel
            control={
              <Switch 
                  checked={isAuthenticated} 
                  onChange={()=>
                      logout({
                          returnTo:window.location.origin,
                      })
                  } 
                  aria-label="login switch" 
              />
            }
              label={isAuthenticated ? 'Logout' : 'Login'}
          />
          </FormGroup>
          {/* <AuthenticationButton /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}


