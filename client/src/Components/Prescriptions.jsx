import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Button from '@material-ui/core/Button';

class Prescriptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prescriptions: []
        }

    }

    async componentDidMount() {

        const medications = await axios.get(`http://localhost:3000/users/${this.props.id}/prescriptions`)
        this.setState({
            prescriptions: medications.data
        })

    }


    render() {
        const prescriptions = this.state.prescriptions
        console.log(prescriptions)


        return (<div>
       
            <Button onClick={() => { this.props.history.goBack() }} variant="contained" color="primary">Back</Button>
            <h1>{prescriptions.map((prescription, index) => {
                return (<p key={prescription.id}>Name:{prescription.name}| 
                Dosage:{prescription.dosage} | Time:{prescription.medication_time}
                    | Purpose: {prescription.purpose} 
                    | Pharmacy: {prescription.pharmacy} 
                    | Prescriber: Dr. {prescription.prescriber}
                </p>)


            })}</h1>


<Link to = {`/prescriptionform`}><Button variant="contained" color="primary">Add a Prescription</Button></Link>


        </div>)
    }
}

export default Prescriptions