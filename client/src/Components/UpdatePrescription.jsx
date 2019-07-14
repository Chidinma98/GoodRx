import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import "./Paper.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const StyledPaper = withStyles({
    root: {
    }
  
  })(Paper);


class UpdatePrescription extends Component{
constructor(){
super()

this.state = {
name:"",
dosage:"",
medication_time:"",
purpose:"",
pharmacy:"",
prescriber:"",
prescriber_specialization:"",
prescriber_phone:""

}

this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

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
    await axios.put(`http://localhost:3000/users/${this.props.id}/${this.props.history.location.pathname}`,{
name: this.state.name,
dosage:this.state.dosage,
medication_time:this.state.medication_time,
purpose: this.state.purpose,
pharmacy: this.state.pharmacy,
prescriber: this.state.prescriber,
prescriber_specialization:this.state.prescriber_specialization,
prescriber_phone:this.state.prescriber_phone

    })
    this.props.history.goBack()
}

async handleDelete(){
    await axios.delete(`http://localhost:3000/users/${this.props.id}/${this.props.history.location.pathname}`)

    this.props.history.goBack()

}

  async componentDidMount() {
    const res = await axios.get(`http://localhost:3000/users/${this.props.id}/${this.props.history.location.pathname}`)
    const prescription = res.data.med
    // console.log(prescription)
    this.setState({
      time: prescription.medication_time,
      name: prescription.name,
      pharmacy: prescription.pharmacy,
      prescriber: prescription.prescriber,
      prescriber_phone: prescription.prescriber_phone,
      specialty: prescription.prescriber_specialization,
      purpose: prescription.purpose,
      dosage: prescription.dosage
    })


  }





  render() {
    const med = this.state

    return (
        <>
        <Button onClick={() => { this.props.history.goBack() }} variant="contained" color="primary">Back</Button>
         <div className="add-update-product">
       
           <div className="paper-container">
             <StyledPaper
               className="paper-add-product"
               component="div"
               elevation="3"
             >
               <div className="add-update-container">
                 <h2>Edit Prescription</h2>
 
                 <form className="add-update-form" onChange = {this.handleChange} onSubmit = {this.handleSubmit}>
                   <Grid container spacing={3}>
                     <Grid item xs={12} >
                       <TextField
                         name="name"
                         label="Prescription Name"
                         fullWidth
                         autoComplete="fname"
                         value = {med.name}
                         
                       />
                     </Grid>
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
                        type="text"
                        label="Time Taken"
                        value={med.time}
                        fullWidth
                        autoComplete="lname"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="purpose"
                        label="Purpose"
                        value={med.purpose}
                        fullWidth

                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField

                        name="pharmacy"
                        label="Pharmacy"
                        value={med.pharmacy}
                        fullWidth

                      />
                    </Grid>
                    <Grid item xs={12} >
                      <TextField


                        name="prescriber"
                        label="Prescriber"
                        value={`Dr. ${med.prescriber}`}
                        fullWidth

                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField

                        name="prescriber_phone"
                        label="Phone"

                        value={med.prescriber_phone}
                        fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField


                        name="prescriber_specialization"
                        label="Specialty"
                        value={med.specialty}
                        fullWidth

                      />
                    </Grid>
 
 
                   </Grid>
                   <br/>
                   <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Set Alert"
      />

                   <br/>
 
 <Button type = "submit" color="primary">Update</Button>
                 </form>
               </div>
 
             </StyledPaper>
           </div>
         </div>
       </>
    );
  }
}

export default UpdatePrescription