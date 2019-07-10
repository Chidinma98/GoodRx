import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";
import Prescriptions from "./Components/Prescriptions"

import axios from 'axios';
import decode from 'jwt-decode';

class App extends Component {
  state = {
    currentUser: {},
  }
  componentDidMount() {  
    // 1. check if there is token saved in localStorage at "jwt"
    const token = localStorage.getItem('jwt')
    // 2. if there is, decode it and save the object to currentUser state
    if (token){
      this.setState({
        currentUser: decode(token)
      })


    }
    
 
  }

  handleLogin = async (data)=> {
    const res = await axios.post('http://localhost:3000/auth/login', data)
    // 2. Retrieve token from response object
    const {token} = res.data
    // 3. save token to local storage at key 'jwt'
    localStorage.setItem("jwt", token)

    // 4. decode token and set currentUser state
    this.setState({
      currentUser: decode(token)
    })

    /* 
    1. submit form data to appropriate endpoint
    2. Retrieve token from response object
    3. save token to local storage at key 'jwt'
    4. decode token and set currentUser state
    */

  }

  handleLogout = ()=>{
    // 1. remove jwt from local storage
    localStorage.removeItem('jwt')
    // 2. clear currentUser in state to empty object
    this.setState({
      currentUser: {}
    })


  }

  handleSignUp = async  (data)=> {
    // 1. submit form data to the appropriate endpoint
    const res = await axios.post('http://localhost:3000/users', data)
    // 2. Retrieve token from response object
    const {token} = res.data
    // 3. save token to local storage at key 'jwt'
    localStorage.setItem("jwt", token)

    // 4. decode token and set currentUser state
    this.setState({
      currentUser: decode(token)
    })

  }

  showPrescriptions = async () =>{
    const prescriptions = await axios.get(`http://localhost:3000/users/${this.state.currentUser.user_id}/prescriptions`)
  console.log(prescriptions)
  }
  

  render() {
    const {currentUser} = this.state;
    const userIsLoggedIn = currentUser.user_id
    
    return (
      <Router>
        <div className="App">


    {userIsLoggedIn && <Redirect to='/home'/> } 


          <header>
            
{userIsLoggedIn ? 
<a  onClick={this.handleLogout}> Log Out </a > : 
<nav> <Link to='/signup'>Sign Up</Link> <Link to='/login'>Log in</Link></nav> }         

   <div> {currentUser.user_id && `Hello ${currentUser.username}`} </div>
   {/* {console.log(currentUser.user_id)} */}
            <p onClick ={this.showPrescriptions}>Prescriptions</p>
            
            <h1>
              <Link
                to="/"
                onClick={() =>
                  this.setState({
                    teacherForm: {
                      name: "",
                      photo: ""
                    }
                  })
                }
              >
                Auth App
              </Link>
            </h1>
          </header>
          <Switch>
            <Route exact path="/login" render={(props) => <LoginForm {...props} handleLogin={this.handleLogin} />} />
            <Route exact path="/signup" render={() => <SignUpForm handleSignUp={this.handleSignUp} />} />
            <Route exact path = "/prescriptions" render={((props) => <Prescriptions />)}/>
            <Route exact path= '/home' render={()=> <div> this is the homepage </div>} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
