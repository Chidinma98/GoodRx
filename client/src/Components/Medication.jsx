import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'relative',
    },
    layout: {
    //   width: '200',
    //   marginLeft: theme.spacing(2),
    //   marginRight: theme.spacing(1),
    //   [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
    //     width:200,
    //     marginLeft: '200',
    //     marginRight: '200',
    //   },
    },
    paper: {
        root: {
        }
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
  




class Medication extends Component{
constructor(){
super()
this.state = {
    time:"",
    name:"",
    pharmacy:"",
    prescriber:"",
    prescriber_phone:"",
    specialty:"",
    purpose:""
}




}

async componentDidMount(){
const res = await axios.get(`http://localhost:3000/${this.props.history.location.pathname}`)
const prescription = res.data.med
// console.log(prescription)
this.setState({
    time:prescription.medication_time,
    name: prescription.name,
    pharmacy: prescription.pharmacy,
    prescriber: prescription.prescriber,
    prescriber_phone: prescription.prescriber_phone,
    specialty:prescription.prescriber_specialization,
    purpose:prescription.purpose
})


}


    render(){
        const { classes } = this.props
        const med = this.state
        console.log(med.name)
        
        
        return(
       
        <div className = "paper-container">
         
              <Paper className={this.props.paper} component = "div" elevation = "3">
                <Typography component="h1" variant="h4" align="center">
                  Prescription Name
                </Typography>
               
            <Typography variant="h6" gutterBottom>
              Shipping address
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="fname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="billing address-line1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="billing address-line2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="p"
                  value = "practice"
                  fullWidth
                  autoComplete="billing address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="state" name="state" label="State/Province/Region" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="billing postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="billing country"
                />
              </Grid>
             
            </Grid>
        
              </Paper>
            
        
              <p>Hi</p>
          </div>
        
          
         
          )
    }
}

export default Medication