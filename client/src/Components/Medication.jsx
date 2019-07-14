import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


class Medication extends Component{
constructor(){
super()




}

async componentDidMount(){
const res = await axios.get(`http://localhost:3000/${this.props.history.location.pathname}`)
console.log(res)


}


    render(){
         
        
        return(<div>

          


          

        </div>)
    }
}

export default Medication