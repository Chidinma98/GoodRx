import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Prescriptions extends Component{
constructor(props){
super(props)
this.state = {
    prescriptions: []
}

}

async componentDidMount(){

    const medications = await axios.get(`http://localhost:3000/users/${this.props.id}/prescriptions`)
this.setState({
    prescriptions: medications.data
})

}


    render(){
         const prescriptions = this.state.prescriptions
        
        return(<div>
           
<h1>{prescriptions.map((prescription, index)=>{
return(<p key = {prescription.id}>{prescription.name}</p>)


})}</h1>
           
        </div>)
    }
}

export default Prescriptions