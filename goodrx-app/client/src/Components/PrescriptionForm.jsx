import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


class PrescriptionForm extends Component{
constructor(){
super()

this.state = {
name:"",
dosage:"",
medication_time:"",
purpose:"",
pharmacy:"",
prescriber_specialization:"",
prescriber_phone:""

}


}




    render(){
       
        
        return(<div>
 <button onClick={() => { this.props.history.goBack() }}>Back</button>
<form>
 <input type="text" name="name" placeholder = "Medication Name"/>
 <input type="text" name="dosage" placeholder = "Dosage(mg)" />
 <input type="time" name="medication_time" placeholder = "Time Taken"/>
 <input type="text" name="purpose" placeholder = "purpose" />
 <input type="text" name="pharmacy" placeholder = "pharmacy" />
 <input type="text" name="prescriber_specialization" placeholder = "specialization" />
 <input type="text" name="prescriber_phone" placeholder = "Presciber Phone" />
 <input type = "submit"></input>
</form>


          

        </div>)
    }
}

export default PrescriptionForm