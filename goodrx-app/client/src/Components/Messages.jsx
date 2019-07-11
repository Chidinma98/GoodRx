import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Messages extends Component{





    render(){
         
        
        return(<div>

       <form>
           <input type = "text" name = "doctor"/>
           <input type = "text" name = "description"/>
       </form>

        </div>)
    }
}

export default Messages