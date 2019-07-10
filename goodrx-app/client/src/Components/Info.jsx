import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Info extends Component{





    render(){
         
        
        return(<div>

          <Link to = {`/prescriptions`}> <p>Prescriptions</p> </Link>
          <Link to = {`/doctors`}><p>Doctors</p></Link>
          <Link><p>Messages</p></Link>
          <Link><p>Pharmacies</p></Link>

        </div>)
    }
}

export default Info