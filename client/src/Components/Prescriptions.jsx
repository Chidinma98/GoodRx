import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../App.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 205,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginLeft: 50
  },
});




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
        const { classes } = this.props


        return (<div >
       <Button onClick={() => { this.props.history.goBack() }} variant="contained" color="primary">Back</Button>
       
            <div className = "med">{prescriptions.map((prescription, index) => {
                return ( <Card className={this.props.card} key = {prescription.id}>
                    <CardContent>
                     
                      <Typography variant="h5" component="h1">
                      {prescription.name}
                      </Typography>
                      <Typography className={this.props.pos} component="p" >
                      Dosage:{prescription.dosage}
                      </Typography>
                      <Typography className={this.props.pos} component="p" >
                      Time:{prescription.medication_time}
                      </Typography>
                      <Typography variant="body2" component="p" color="textSecondary">
                       Purpose:{prescription.purpose}
                        <br />
                
                      </Typography>
                    </CardContent>
                    <CardActions>
                     <Link to ={`/users/${this.props.id}/prescriptions/${prescription.id}`}> <Button size="small">  More</Button> </Link> 
                    </CardActions>
                  </Card>)


            })}</div>
 <Link to = {`/prescriptionform`}><Button variant="contained" color="primary">Add a Prescription</Button></Link>

<br />


        </div>)
    }
}

export default Prescriptions