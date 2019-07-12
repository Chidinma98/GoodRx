import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Button from 'react-bootstrap/Button'


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
            <button  variant="link" onClick={() => { this.props.history.goBack() }}>Back</button>
            <form onChange = {this.handleChange} onSubmit = {this.handleSubmit}>
                Doctor: <input type="text" name="doctor" />
                Message: <input type="text" name="description" />
                <input type="submit" />
            </form>

        </div>)
    }
}

export default Messages