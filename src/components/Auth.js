import React, { useState } from 'react';
import './Auth.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '80%',
            color: 'yellow',

        },
        "&$focused": { // increase the specificity for the pseudo class
            color: "green"
        }
    },
    input: {
        color: 'red',

    }
}));


const Auth = () => {

    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
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
                    <animated.form action="" id="registerform" style={registerProps}>
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

function LoginForm() {
    const classes = useStyles();

    return (
        // <form action="" id="loginForm" className={classes.root} >
        //     <TextField id="standard-basic" label="Standard" />
        //     <TextField id="standard-basic" label="Name"  />
        //     <TextField id="standard-basic" label="LastName" placeholder="Type your last name" />
        //     <TextField
        //         id="standard-full-width"
        //         label="Label"
        //         placeholder="Placeholder"
        //         fullWidth
        //         margin="normal"
        //     />
        // </form>
        <React.Fragment>

            <TextField
                id="standard-basic"
                label="Username"
                InputProps={{
                    // style: { color: 'red' },
                    className: classes.input,
                }}

                placeholder="Enter your username" />
            <TextField id="standard-basic" label="Password" placeholder="Enter your password" />
            <input type="submit" value="Login" className="submit" />
        </React.Fragment>

    )
}

function RegisterForm() {
    return (
        <React.Fragment>
            <label for="fullname">full name</label>
            <input type="text" id="fullname" />
            <label for="email">email</label>
            <input type="text" id="email" />
            <label for="password">password</label>
            <input type="text" id="password" />
            <label for="confirmpassword">confirm password</label>
            <input type="text" id="confirmpassword" />
            <input type="submit" value="submit" class="submit" />
        </React.Fragment>
    )
}

export default Auth;
