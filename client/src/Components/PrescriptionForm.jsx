import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import "./Paper.css";

const StyledPaper = withStyles({
    root: {
    }
  
  })(Paper);


class PrescriptionForm extends Component{
constructor(){
super()

this.state = {
name:"",
dosage:"",
medication_time:"",
purpose:"",
pharmacy:"",
prescriber_specialization:"",
prescriber_phone:""

}

this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

}

handleChange(event){
    const name = event.target.name;
    const value = event.target.value
    this.setState({
        [name]: value
    })

}

async handleSubmit(e){
    e.preventDefault()
    await axios.post(`http://localhost:3000/users/${this.props.id}/prescriptions`,{
name: this.state.name,
dosage:this.state.dosage,
medication_time:this.state.medication_time,
purpose: this.state.purpose,
pharmacy: this.state.pharmacy,
prescriber_specialization:this.state.prescriber_specialization,
prescriber_phone:this.state.prescriber_phone

    })

  this.props.history.goBack()
}

    
render(){
       
        
        return(<>
            <Button onClick={() => { this.props.history.goBack() }} variant="contained" color="primary">Back</Button>
             <div className="add-update-product">
           
               <div className="paper-container">
                 <StyledPaper
                   className="paper-add-product"
                   component="div"
                   elevation="3"
                 >
                   <div className="add-update-container">
                     <h2>Add a Medication</h2>
     
                     <form className="add-update-form" onChange = {this.handleChange} onSubmit = {this.handleSubmit}>
                       <Grid container spacing={3}>
                         <Grid item xs={12} >
                           <TextField
                             name="name"
                             label="Prescription Name"
                             fullWidth
                             autoComplete="fname"
                             
                           />
                         </Grid>
                         <Grid item xs={12} sm={6}>
                           <TextField
                             name="dosage"
                             label="Dosage"
                             fullWidth
                             autoComplete="fname"
                             
                           />
                         </Grid>
                         <Grid item xs={12} sm={6}>
                           <TextField
     
     
                             name="medication_time"
                             type="text"
                             label="Time Taken"
                                                         fullWidth
                             autoComplete="lname"
                           />
                         </Grid>
                         <Grid item xs={12} sm={6}>
                           <TextField
                             name="purpose"
                             label="Purpose"
                                                          fullWidth
     
                           />
                         </Grid>
                         <Grid item xs={12} sm={6}>
                           <TextField
     
                             name="pharmacy"
                             label="Pharmacy"
                             
                             fullWidth
     
                           />
                         </Grid>
                         <Grid item xs={12} >
                           <TextField
     
     
                             name="prescriber"
                             label="Prescriber"
                             
                             fullWidth
     
                           />
                         </Grid>
                         <Grid item xs={12} sm={6}>
                           <TextField
                             id="state"
                             name="prescriber_specialization"
                             label="Specialization"
     
                             
                             fullWidth />
                         </Grid>
     
                         <Grid item xs={12} sm={6}>
                           <TextField
     
     
                             name="prescriber_specialization"
                             label="Phone Number"
                             
                             fullWidth
     
                           />
                         </Grid>
     
     
     
                       </Grid>
     
     <Button type = "submit">Create</Button>
                     </form>
                   </div>
     
                 </StyledPaper>
               </div>
             </div>
           </>)
    }
}

export default PrescriptionForm