import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import "./UserPage.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import Nav from "../NewLandingPage/modules/views/Nav";
import Dashboard from '../Journal/Dashboard';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <Nav />








    {/* 
    <h1 id="welcome">
      Welcome, {props.store.user.username}!
    </h1> */}
    {/* <p>Your ID is: {props.store.user.id}</p> */}

    <Dashboard />

    {/* <Card >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <ArrowBackIcon className="arrow" />
          <Avatar className="avatar">
          </Avatar>
          <Typography component="h1" variant="h5">
            Register your profile
                </Typography>
        </div>
      </Container>
    </Card>


    <Card >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <ArrowBackIcon className="arrow" />
          <Avatar className="avatar">
          </Avatar>
          <Typography component="h1" variant="h5">
            Register your profile
                </Typography>
        </div>
      </Container>
    </Card>


    <Card >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <ArrowBackIcon className="arrow" />
          <Avatar className="avatar">
          </Avatar>
          <Typography component="h1" variant="h5">
            Register your profile
                </Typography>
        </div>
      </Container>
    </Card>
    <Button className="register"
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      name="submit"
      value="Register"
    >Register
                     </Button>
    <center>
      <Link to="/login">
        <Button
          type="logbutton"
          className="link-button"
          color="primary"
        >
          Login
          </Button>
      </Link>
    </center>
    <Link to="/home" >
      <HomeIcon className="home" />
    </Link>




 */}


    <AppFooter />

  </div>
);


export default connect(mapStoreToProps)(UserPage);
