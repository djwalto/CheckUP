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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './UserPage.css';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>

    <Nav />
    <Avatar className="userAvatar">
      <AccountCircleIcon />
    </Avatar>
    <div className="userDiv">
      <Card className="userCard" >
        <Container className="userContainer" component="main" maxWidth="xs">

          <CssBaseline />
          <div className="userPaper">
            <ArrowBackIcon className="userArrow" />
            <br></br>
            <br></br>
            <Avatar className="userAvatar">
            </Avatar>
            <Typography component="h1" variant="h5">

              Welcome, {props.store.user.username}!
         Your ID is: {props.store.user.id}
            </Typography>
          </div>

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







          <CssBaseline />
          <div className="userPaper">
            <ArrowBackIcon className="userArrow" />

            <Avatar className="userAvatar">

            </Avatar>
            <Typography component="h1" variant="h5">
            </Typography>
            <Link to="/journal">
              <Button variant="contained" color="primary">JOURNAL</Button></Link>
          </div>








          <CssBaseline />
          <div className="userPaper">
            <ArrowBackIcon className="userArrow" />

            <Avatar className="userAvatar">

            </Avatar>
            <Typography component="h1" variant="h5">

              Covid Tracker
        </Typography>
            <Link to="/tracker">
              <Button variant="contained" color="primary">TRACKER</Button></Link>

          </div>








          <CssBaseline />
          <div className="userPaper">
            <ArrowBackIcon className="userArrow" />
            <br></br>
            <br></br>
            <Avatar className="userAvatar">

            </Avatar>
            <Typography component="h1" variant="h5">

              Covid BOT
           </Typography>
            <Link to="/chat">
              <Button variant="contained" color="primary">CHAT</Button></Link>

          </div>





          <CssBaseline />
          <div className="userPaper">
            <ArrowBackIcon className="userArrow" />
            <br></br>
            <br></br>
            <Avatar className="userAvatar">

            </Avatar>
            <Typography component="h1" variant="h5">
              LOGOUT
</Typography>
            <LogOutButton className="log-in" />

          </div>






        </Container>
      </Card>
    </div >

    <AppFooter />

  </div >



);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);