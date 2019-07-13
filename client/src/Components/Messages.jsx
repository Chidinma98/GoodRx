import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));


class Messages extends Component {
    constructor() {
        super()
        this.state = {
            doctor: "",
            description: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const res = await axios.post(`http://localhost:3000/users/${this.props.id}/messages`, {
            doctor: this.state.doctor,
            description: this.state.description
        })
console.log(res);
    
    this.props.history.goBack()
    }




    render() {
const { classes } = this.props

        return (<div>
            
            
            <Button  variant="contained" color="primary" onClick={() => { this.props.history.goBack() }}>Back</Button> 
            <form onChange = {this.handleChange} onSubmit = {this.handleSubmit}className={this.props.container} noValidate autoComplete="off">

<TextField
        id="outlined-helperText"
        name="doctor"
        label="Doctor Name"
        defaultValue="e.g John Smith"
        className={this.props.textField}
        helperText="Enter Doctor full First and Last name"
        margin="normal"
        variant="outlined"
      />
   
      <TextField
        name ="description"
        id="outlined-multiline-static"
        label="Messages"
        multiline
        rows="4"
        defaultValue=" Hello Doctor..."
        className={this.props.textField}
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" type = "submit"> Send </Button>
    </form>

        </div>)
    }
}

export default Messages