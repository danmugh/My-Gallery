import React, { useState } from 'react';
import './Auth.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSpring, animated } from "react-spring";
import {grey, deepPurple, green} from "@material-ui/core/colors";


const Auth = () => {

    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
    const [error, setError] = useState(null)

    const loginProps = useSpring({
        left: registrationFormStatus ? -500 : 0,

        // Login form sliding positions
    });
    const registerProps = useSpring({
        left: registrationFormStatus ? 0 : 500, // Register form sliding positions
    });

    const loginBtnProps = useSpring({
        borderBottom: registrationFormStatus
            ? "solid 0px transparent"
            : "solid 2px #1059FF",  //Animate bottom border of login button
    });
    const registerBtnProps = useSpring({
        borderBottom: registrationFormStatus
            ? "solid 2px #1059FF"
            : "solid 0px transparent", //Animate bottom border of register button
    });

    function registerClicked() {
        setRegistartionFormStatus(true);
    }
    function loginClicked() {
        setRegistartionFormStatus(false);
        setError(error)
    }

    const classes = useStyles();

    return (
        <div className="container">
            <div className="login-register-wrapper">
                <div className="nav-buttons">
                    <animated.button
                        onClick={loginClicked}
                        id="loginBtn"
                        style={loginBtnProps}
                    >
                        Signin
                    </animated.button>
                    <span style={{textAlign: 'center', paddingRight: '15px'}} >or</span>
                    <animated.button
                        onClick={registerClicked}
                        id="registerBtn"
                        style={registerBtnProps}
                    >
                        Signup
                    </animated.button>
                </div>
                <div className="form-group">
                    <animated.form action="" id="loginform" style={loginProps} className={classes.root} >
                        <LoginForm />
                    </animated.form>
                    <animated.form action="" id="registerform" style={registerProps} className={classes.root}>
                        <RegisterForm />
                    </animated.form>
                </div>
                <animated.div className="forgot-panel" style={loginProps}>
                    <a herf="#">Forgot your password?</a>
                </animated.div>
            </div>
        </div>

    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '80%',

        },
        "&$focused": { // increase the specificity for the pseudo class
            color: deepPurple
        },
        "&$selected": {
            color: green
        }
    },
    input: {
        color: 'white',
        fontFamily: 'Raleway',

    }
}));

function LoginForm() {
    const classes = useStyles();
    const [error, setError] = useState(null)

    return (

        <React.Fragment>

            <TextField
                id="custom-css-standard-input"
                label="Username"

                InputProps={{
                    // style: { color: 'red' },
                    className: classes.input,
                }}
                placeholder="Enter your username"
            />
            <TextField
                id="standard-basic"
                label="Password"
                InputProps={{
                    className: classes.input,
                }}
                placeholder="Enter your password"
            />
            <br/>
            <br/>
            <input type="submit" value="Login" className="submit" />
        </React.Fragment>

    )
}

function RegisterForm() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <TextField
                id="custom-css-standard-input"
                label="Username"
                InputProps={{
                    // style: { color: 'red' },
                    className: classes.input,
                }}
                placeholder="Enter your username"
            />
            <TextField
                id="custom-css-standard-input"
                label="Name"
                InputProps={{
                    // style: { color: 'red' },
                    className: classes.input,
                }}
                placeholder="Enter your name"
            />
            <TextField
                id="custom-css-standard-input"
                label="Email"
                InputProps={{
                    // style: { color: 'red' },
                    className: classes.input,
                }}
                placeholder="Enter your email"
            />
            <TextField
                id="custom-css-standard-input"
                label="Password"
                InputProps={{
                    // style: { color: 'red' },
                    className: classes.input,
                }}
                placeholder="Enter your password"
            />
            <br/>
            <br/>
            <input type="submit" value="submit" class="submit" />
        </React.Fragment>
    )
}

export default Auth;
