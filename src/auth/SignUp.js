import React, {useEffect, useState} from 'react';
import {
    Container, CssBaseline, Avatar, Typography,
    Button, Grid, Link, makeStyles, Card, CardContent, createMuiTheme, ThemeProvider
} from '@material-ui/core';
import {LockRounded} from '@material-ui/icons';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import fire from '../firebase/config';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './Auth.css'


const SignUp = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleSignUp = () => {
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                if(response) {
                    props.toggle();
                    toast.success('User Registered Successfully');
                }
            }).catch((error) => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    toast.error(error.message);
                    break;
                case 'auth/invalid-email':
                    toast.error(error.message);
                    break;
                case 'auth/weak-password':
                    toast.error(error.message);
                    break;
            }
        });
    }

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if(value !== password) {
                return false;
            }
            return true;
        });
        return () => {
            ValidatorForm.removeValidationRule('isPasswordMatch');
        }
    }, [password])

    return (
        <div className="bg-img">
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <Card className={classes.card}>
                        <CardContent>
                            <ToastContainer/>
                            <CssBaseline/>
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <LockRounded/>
                                </Avatar>
                                <Typography component="h1" variant="h5" className={classes.mainTitle}>
                                    Sign Up
                                </Typography>
                                <ValidatorForm
                                    onSubmit={handleSignUp}
                                    className={classes.form}>
                                    <TextValidator
                                        variant="standard"
                                        margin="normal"
                                        fullWidth
                                        label="Email"
                                        onChange={handleEmail}
                                        name="email"
                                        value={email}
                                        validators={['required', 'isEmail']}
                                        errorMessages={['this field is required', 'email is not valid']}
                                        autoComplete='off'
                                        InputProps={{
                                            className: classes.label,
                                        }}
                                    />
                                    <br/>
                                    <TextValidator
                                        variant="standard"
                                        fullWidth
                                        label="Password"
                                        onChange={handlePassword}
                                        name="password"
                                        type="password"
                                        value={password}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        autoComplete="off"
                                        InputProps={{
                                            className: classes.label,
                                        }}
                                    />
                                    <br/>
                                    <TextValidator
                                        variant="standard"
                                        label="Confirm password"
                                        fullWidth
                                        onChange={handleConfirmPassword}
                                        name="confirmPassword"
                                        type="password"
                                        validators={['isPasswordMatch', 'required']}
                                        errorMessages={['password mismatch', 'this field is required']}
                                        value={confirmPassword}
                                        autoComplete="off"
                                    />
                                    <br/>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        className={classes.submit}
                                    >
                                        Sign Up
                                    </Button>
                                    <Grid container>
                                        <Grid item>
                                            <br/>
                                            <Link underline='none' onClick={props.toggle} className={classes.pointer} variant="body2">
                                                {"Already have an account? Sign In"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </ValidatorForm>
                            </div>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        </div>

    );
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fe6b8b',
        },
        secondary: {
            main: '#f44336',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    mainTitle : {
        fontFamily: 'Poiret One',
        fontSize: '30px',
        fontWeight: '600'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    label : {
        fontFamily: 'Montserrat',
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#0e0e0e',
    },
    submit: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        margin: theme.spacing(3, 0, 2),
        color: '#fff',
        fontFamily: 'Poiret One',
        fontSize: '15px',
        fontWeight: '800'
    },
    card: {
        marginTop: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '20px',
        background: 'linear-gradient(201deg, rgba(244,67,54,1) 0%, rgba(254,107,139,1) 18%, rgba(255,255,255,0) 67%)',
        boxShadow: '-1px 5px 18px 0px rgba(0,0,0,0.75)',
        // boxShadow: '0px 2px 7px rgba(0,0,0,0.3)',

        ['@media (max-width:480px)']: {
            paddingLeft: '10px',
            paddingRight: '10px',
        }
    },
    pointer: {
        cursor: 'pointer',
        // color: '#fe7678',
        color: '#f44336',
        fontFamily: 'Montserrat',
        fontSize: '15px',
        fontWeight: 'bold'
    }
}))
export default SignUp;