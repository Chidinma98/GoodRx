import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'

class Info extends Component{





    render(){
         
        
        return(<div>

          <Link to = {`/prescriptions`}> <p>Prescriptions</p> </Link>
          <Link to = {`/messages`}><p>Messages</p></Link>
          <Link to = {'/info'}><p>Pharmacies</p></Link>


          

        </div>)
    }
}

export default Info