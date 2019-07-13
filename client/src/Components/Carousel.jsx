import React, { Component } from "react";
import { Link } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



class SignUpForm extends Component {
 
  
  state = {

        username: "",
        email: "",
        phone_number: "",
        password: "",
        passwordConfirm: ""
    }


    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    handleSubmit = (e) => {
        if (this.state.passwordConfirm !== this.state.password) {
            alert(`Your Password don't match`)
            return this.setState({
                password: "",
                passwordConfirm: ""
            })
        }

        this.props.handleSignUp(this.state)
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>Username</p>
                    <input
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />

                    <p>Email:</p>
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <p>Phone Number:</p>
                    <input
                        name="phone_number"
                        type="integer"
                        value={this.state.phone_number}
                        onChange={this.handleChange}
                    />
                    <p>Password:</p>
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <p>Confirm Password</p>
                    <input
                        name="passwordConfirm"
                        type="password"
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>Sign Up</button>

                    <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={this.props.submit}
          >

Sign In
          </Button>
                </form>

                <form className={this.props.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={this.props.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>

            </div>

        )


    }


}





export default SignUpForm;