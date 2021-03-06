import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
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
      marginTop: theme.spacing(3),
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
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={this.props.paper}>
              <Avatar className={this.props.avatar}>
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form onSubmit={this.handleSubmit} className={this.props.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} >
                    <TextField
                      value={this.state.username}
                      onChange={this.handleChange}
                      autoComplete="fname"
                      name="username"
                      variant="outlined"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                    value={this.state.email}
                    onChange={this.handleChange}
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                    value={this.state.phone_number}
                    onChange={this.handleChange}
                    type="integer"
                      variant="outlined"
                      required
                      fullWidth
                      id="phone_number"
                      label="phone_number"
                      name="phone_number"
                      autoComplete="phone_number"
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                    value={this.state.password}
                    onChange={this.handleChange}
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                    value={this.state.passwordConfirm}
                    onChange={this.handleChange}
                      variant="outlined"
                      required
                      fullWidth
                      name="passwordConfirm"
                      type="password"
                      label="Confirm Password"
                      id="password"
                      autoComplete="current-password"
                    />
                  
                  
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive  marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={this.props.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
           
          </Container>

        )


    }


}





export default SignUpForm;