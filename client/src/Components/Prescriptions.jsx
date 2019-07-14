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
       
       
            <div className = "med">{prescriptions.map((prescription, index) => {
                return ( <Card className={this.props.card}>
                    <CardContent>
                      <Typography className={this.props.title} color="textSecondary" gutterBottom>
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="h2">
                       
                      </Typography>
                      <Typography className={this.props.pos} color="textSecondary">
                        {prescription.name}
                      </Typography>
                      <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>)


            })}</div>

        </div>)
    }
}

export default Prescriptions