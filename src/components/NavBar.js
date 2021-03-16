import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';


const NavBar = (props) => {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        // localStorage.removeItem('user');
        // props.setUserState();
        // setAnchorEl(null);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };


    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.menuBackground}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Cyrrus, my Gallery
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle style={{ fontSize: "35px" }} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        top: '0',
        right: '0'
    },
    menuBackground: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Abril Fatface',
    }
}));

export default NavBar;