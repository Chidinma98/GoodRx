import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



class LoginForm extends Component {
  state = {
    password: "",
    username: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  

  render() {

   
  
  
   
    return (
     
      <div className="auth-container">
  
        <h2>login</h2>
        <hr />
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleLogin(this.state);
           
          }}
        >
          <p>Username:</p>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <p>Password:</p>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
      
          <hr />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;