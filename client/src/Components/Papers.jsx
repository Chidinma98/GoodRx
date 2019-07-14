import React, {Component} from "react";
import {Route, Link, Redirect} from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';


import {withStyles} from "@material-ui/core/styles";
import "./Paper.css";



const StyledPaper = withStyles({
  root: {
  }

})(Paper);



class Papers extends Component {
  constructor(props) {
    super(props);
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
  
  
  
  
  
  render() {
    const med = this.state
        console.log(med.name)
    return (
      <>
       
        <div className="add-update-product">
          <div className="paper-container">
            <StyledPaper
              className="paper-add-product"
              component="div"
              elevation="3"
            >
              <div className="add-update-container">
                <h2>{med.name}</h2>

                <form className="add-update-form">
                <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  
                  name="firstName"
                  // label="Medication Time"
                  fullWidth
                  autoComplete="fname"
                  value={med.time}
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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="billing address-line1"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  value = "practicegfc"
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

                  
                </form>
              </div>

            </StyledPaper>
          </div>
        </div>
      </>
    );
  }
}

export default Papers