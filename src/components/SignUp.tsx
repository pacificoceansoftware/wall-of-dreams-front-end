import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SaveUserAction } from "../store/user/action";
import { AppState } from '../store';
import { SIGN_STATE } from '../store/home/type';
import { SetSignState } from "../store/home/action";
import * as UserAction from "../store/user/action";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://wallofdeams.com/">
        Wallofdreams.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function mapStateToProps(state: AppState) {
  return {
    userState: state.user,
    signUpState: state.signUp,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    { ...UserAction, SaveUserAction, SetSignState },
    dispatch,
  )
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux;

function SignUp(props: Props) {
  const classes = useStyles();

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const submitUser = (event: any) => {
    validation();
    props.SaveUserAction(props.userState.firstName, props.userState.lastName,
      props.userState.emailAddress, props.userState.password, props.userState.dream);

  }

  const firstNameOnChange = (event: any) => {
    props.SetFirstName(event.target.value);
  }

  const lastNameOnChange = (event: any) => {
    props.SetLastName(event.target.value);
  }

  const emailAddressOnChange = (event: any) => {
    props.SetEmailAddress(event.target.value);
  }

  const passWordOnChange = (event: any) => {
    props.SetPassword(event.target.value);
  }

  const signIn = (event: any) => {
    props.SetSignState(SIGN_STATE.SIGN_IN);
  }

  const validation = () => {
    if (props.userState.firstName === "") {
      setFirstNameError("please fill your first name");
      setTimeout(setFirstNameError, 5000, "");
    }
    if (props.userState.lastName === "") {
      setLastNameError("please fill your last name");
      setTimeout(setLastNameError, 5000, "");
    }
    if (props.signUpState.emailAddressError !== "") {
      setEmailError(props.signUpState.emailAddressError);
      setTimeout(setEmailError, 5000, "");
    } else if (props.userState.emailAddress === "") {
      setEmailError("email can not be empty");
      setTimeout(setEmailError, 5000, "");
    }
    if (props.signUpState.passwordError !== "") {
      setPasswordError(props.signUpState.emailAddressError);
      setTimeout(setPasswordError, 5000, "");
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={firstNameError !== ''}
                helperText={firstNameError !== '' ? firstNameError : ''}
                onChange={firstNameOnChange}
              >
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                error={lastNameError !== ''}
                helperText={lastNameError !== '' ? lastNameError : ''}
                onChange={lastNameOnChange}
              >

              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={emailAddressOnChange}
                error={emailError !== ''}
                helperText={emailError !== '' ? emailError : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordError !== ''}
                helperText={passwordError !== '' ? passwordError : ''}
                onChange={passWordOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitUser}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2"
                onClick={signIn}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default connector(SignUp);
