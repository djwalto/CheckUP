import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import Nav from '../NewLandingPage/modules/views/Nav';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';
import './UserPage.css';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>

    <Nav />

    <div className="userDiv">

      {/* <Card className="userCard" > */}
      {/* 
      <Container className="userContainer" component="main" maxWidth="xs"> */}



      <CssBaseline />
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>

          <div className="userWelcome">
            <Avatar className="userAvatar">
              <PersonIcon />
            </Avatar>
            <div className="userTextDivGreeting">
              <Typography className="userTextGreeting" component="h1" variant="h5">

                Welcome to CheckUP, {props.store.user.username}!

              </Typography>
            </div>
          </div>
        </Grid>



        {/* <ArrowBackIcon className="userArrow" />
              <br></br>
              <br></br>
              <Avatar className="userAvatar">
              </Avatar>
              <Typography component="h1" variant="h5">

                Welcome, {props.store.user.username}!
         Your ID is: {props.store.user.id}
              </Typography>
            </div> */}


        {/* 
        <Grid item xs={12} md={4}>
          <div className="userPaper">
            <ArrowBackIcon className="userArrow" />
            <Avatar className="userAvatar">
            </Avatar>
            <Typography component="h1" variant="h5">
              HOME
              </Typography>
            <Link to="/home">
              <HomeIcon className='loginHome' />
            </Link>
          </div>
        </Grid> */}


        {/* 

        <Grid item xs={12} md={4}>
          <CssBaseline />
          <div className="userPaper">
            <ArrowBackIcon className="userArrow" />

            <Avatar className="userAvatar">

            </Avatar>
            <Typography component="h1" variant="h5">
              HOME
               </Typography>
            <Link to="/home">
              <HomeIcon className='loginHome' />
            </Link>
          </div>
        </Grid> */}





        <Grid className="userItem" item xs={12} md={2}>
          <div className="userTextDiv">
            <Typography className="userText" component="h1" variant="h5">
              Health Journal
               </Typography>
          </div>
          <CssBaseline />
          <Link to="/journal">
            <div className="userPaperJournal">
            </div>
          </Link>
        </Grid>






        <Grid className="userItem" item xs={12} md={2}>
          <div className="userTextDiv">
            <Typography className="userText" component="h1" variant="h5">
              COVID Tracker
               </Typography>
          </div>
          <CssBaseline />
          <Link to="/tracker">
            <div className="userPaperTracker">
            </div>
          </Link>
        </Grid>







        <Grid className="userItem" item xs={12} md={2}>
          <div className="userTextDiv">
            <Typography className="userText" component="h1" variant="h5">
              COVID Checker
               </Typography>
          </div>
          <CssBaseline />
          <Link to="/chat">
            <div className="userPaperChat">
            </div>
          </Link>
        </Grid>


      </Grid>









      {/* </Container> */}

      {/* </Card> */}
      {/* </Grid> */}




    </div >
    <AppFooter />
  </div>


);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);