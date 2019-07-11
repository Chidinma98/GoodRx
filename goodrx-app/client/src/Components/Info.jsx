import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Info extends Component{





    render(){
         
        
        return(<div>

          <Link to = {`/prescriptions`}> <p>Prescriptions</p> </Link>
          {/* <Link to = {`/`}><p>Doctors</p></Link> */}
          <Link to = {`/messages`}><p>Messages</p></Link>
          <Link to = {`/`}><p>Pharmacies</p></Link>

        </div>)
    }
}

export default Info