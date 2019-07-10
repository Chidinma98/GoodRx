import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Prescriptions extends Component{
constructor(props){
super(props)
}

async componentDidMount(){

    const prescriptions = await axios.get(`http://localhost:3000/users/${this.props.id}/prescriptions`)
    console.log(prescriptions)

}


    render(){
        return(<div>

           
        </div>)
    }
}

export default Prescriptions