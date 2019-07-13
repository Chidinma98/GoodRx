import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button';

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


        return (<div>
            <Button  variant="link" onClick={() => { this.props.history.goBack() }}>Back</Button>
            <form onChange = {this.handleChange} onSubmit = {this.handleSubmit}>
                Doctor: <input type="text" name="doctor" />
              Message:  <TextareaAutosize aria-label="Minimum height" rows={3} placeholder="Enter Message" name ="description"/>
            
                {/* Message: <input type="text" name="description" /> */}
                <input type="submit" />
            </form>

        </div>)
    }
}

export default Messages