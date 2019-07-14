import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";
import Prescriptions from "./Components/Prescriptions"
import UpdatePrescription from "./Components/UpdatePrescription"
import Info from "./Components/Info"
import Doctors from "./Components/Doctors"
import Messages from "./Components/Messages"
import PrescriptionForm from "./Components/PrescriptionForm"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Material from './Components/Material'
import Medication from './Components/Medication'
import Practice from './Components/Practice'
import Papers from './Components/Papers'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import './App.css';


import Carousel from "./Components/Carousel"

import axios from 'axios';
import decode from 'jwt-decode';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  iconic: {
    width: 700,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

class App extends Component {
  state = {
    currentUser: {},
  }
  componentDidMount() {
    // 1. check if there is token saved in localStorage at "jwt"
    const token = localStorage.getItem('jwt')
    // 2. if there is, decode it and save the object to currentUser state
    if (token) {
      this.setState({
        currentUser: decode(token)
      })


    }


  }

  handleLogin = async (data) => {
    const res = await axios.post('http://localhost:3000/auth/login', data)
    // 2. Retrieve token from response object
    const { token } = res.data
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

  handleLogout = () => {
    // 1. remove jwt from local storage
    localStorage.removeItem('jwt')
    // 2. clear currentUser in state to empty object
    this.setState({
      currentUser: {}
    })


  }

  handleSignUp = async (data) => {
    // 1. submit form data to the appropriate endpoint
    const res = await axios.post('http://localhost:3000/users', data)
    // 2. Retrieve token from response object
    const { token } = res.data
    // 3. save token to local storage at key 'jwt'
    localStorage.setItem("jwt", token)

    // 4. decode token and set currentUser state
    this.setState({
      currentUser: decode(token)
    })

  }




  render() {
    const { currentUser } = this.state;
    const userIsLoggedIn = currentUser.user_id
    const { classes } = this.props
    return (


      <Router>

        <div className="App">


          {userIsLoggedIn ? <Redirect to='/carousel' /> : <Redirect to='/' />}


          <header>



            <div className={this.props.root}>

              <AppBar position="static">

                <Toolbar>
                  {userIsLoggedIn ?
                    <Button color="inherit" onClick={this.handleLogout}> Log Out </Button> :

                    <nav>  <Button color="inherit"><Link to='/signup'> Sign Up </Link>  </Button>    <Button color="inherit" > <Link to='/login'>Login </Link></Button></nav>

                  }
<div className = "greet">
<Typography variant="p" className={this.props.title} >
                {currentUser.user_id && `Welcome ${currentUser.username}`}
              </Typography>
              </div>

<div className = "title">
<Typography gutterBottom variant="h5" component="h2" align="center" >
                Wellness_Rx
          </Typography>

          </div>
                </Toolbar>
              </AppBar>

              {/* <Typography variant="h6" className={this.props.title} >
                {currentUser.user_id && `Welcome ${currentUser.username}`}
              </Typography> */}
            </div>




          </header>




          

          <Switch>
            <Route exact path="/login" render={(props) => <LoginForm {...props} handleLogin={this.handleLogin} />} />
            <Route exact path="/signup" render={() => <SignUpForm handleSignUp={this.handleSignUp} />} />
            <Route exact path="/prescriptions" render={((props) => <Prescriptions {...props} id={this.state.currentUser.user_id} />)} />
            <Route exact path="/info" render={((props) => <Info {...props} id={this.state.currentUser.user_id} />)} />
            <Route exact path="/doctors" render={((props) => <Doctors {...props} id={this.state.currentUser.user_id} />)} />
            <Route exact path="/messages" render={((props) => <Messages {...props} id={this.state.currentUser.user_id} />)} />
            {/* <Route exact path='/' render={((props) => <Carousel {...props} id={this.state.currentUser.user_id} />)} /> */}
            <Route exact path='/prescriptionform' render={((props) => <PrescriptionForm {...props} id={this.state.currentUser.user_id} />)} />
            <Route exact path="/carousel" component={Carousel}></Route>
            <Route exact path="/material" component={Material}></Route>

            <Route exact path="/users/:id/prescriptions/:id" render={((props) => <Papers {...props} id={this.state.currentUser.user_id} />)} />

            <Route exact path="/prescriptions/:id" render={((props) => <UpdatePrescription {...props} id={this.state.currentUser.user_id} />)} />
            <Route exact path="/practice" component={Practice}></Route>

          </Switch>
        
          
        </div>
       <div className = "foot">
        <BottomNavigation
      color="primary"
      showLabels
      className={this.props.iconic}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
    </div> 
      </Router>
   
    );
  }
}

export default App;
