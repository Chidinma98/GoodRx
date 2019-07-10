import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Doctors extends Component{
constructor(props){
super(props)
this.state = {
    doctors: []
}

}

async componentDidMount(){

    const physicians = await axios.get(`http://localhost:3000/users/${this.props.id}/doctors`)
this.setState({
    doctors: physicians.data
})

}


    render(){
         const doctors = this.state.doctors
        
        return(<div>
      <button onClick ={()=>{this.props.history.goBack()}}>Back</button>      
<h1>{doctors.map((doctor, index)=>{
return(<p key = {doctor.id}>  Dr. {doctor.name}, {doctor.specialization}</p>)


})}</h1>
           
        </div>)
    }
}

export default Doctors