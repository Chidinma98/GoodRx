import React, { Component } from "react";
import { Link } from "react-router-dom";


class SignUpForm extends Component {
    state = {

        username: "",
        email: "",
        phone_number: "",
        password: "",
        passwordConfirm: ""
    }


    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    handleSubmit = (e) => {
        if (this.state.passwordConfirm !== this.state.password) {
            alert(`Your Password don't match`)
            return this.setState({
                password: "",
                passwordConfirm: ""
            })
        }

        this.props.handleSignUp(this.state)
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>Username</p>
                    <input
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />

                    <p>Email:</p>
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <p>Phone Number:</p>
                    <input
                        name="phone_number"
                        type="integer"
                        value={this.state.phone_number}
                        onChange={this.handleChange}
                    />
                    <p>Password:</p>
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <p>Confirm Password</p>
                    <input
                        name="passwordConfirm"
                        type="password"
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>Sign Up</button>

                </form>

            </div>

        )


    }


}





export default SignUpForm;