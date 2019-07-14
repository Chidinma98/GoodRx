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
      dosage:"",
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
        purpose:prescription.purpose,
        dosage: prescription.dosage
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
                  name="dosage"
                  label="Dosage"
                  fullWidth
                  autoComplete="fname"
                  value={med.dosage}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
               
                  
                  name="medication_time"
                  type = "text"
                  label="Time Taken"
                  value= {med.time}
                  fullWidth
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="purpose"
                  label="Purpose"
                  value = {med.purpose}
                  fullWidth
                 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                
                  name="pharmacy"
                  label="Pharmacy"
                  value = {med.pharmacy}
                  fullWidth
                  
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                 
                  
                  name="prescriber"
                  label= "Prescriber"
                  value = {`Dr. ${med.prescriber}`}
                  fullWidth
                
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                id="state" 
                name="prescriber_specialization" 
                label="Specialization" 
      
                value = {med.specialty}
                fullWidth />
              </Grid>
           
              <Grid item xs={12} sm={6}>
                <TextField
                  
                 
                  name="prescriber_specialization"
                  label="Phone Number"
                  value = {med.prescriber_phone}
                  fullWidth
                  
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