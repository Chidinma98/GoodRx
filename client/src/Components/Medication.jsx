import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


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
        const med = this.state
        console.log(med.name)
        
        
        return(<div>

          


          

        </div>)
    }
}

export default Medication