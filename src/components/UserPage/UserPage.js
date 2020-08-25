import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';

// CUSTOM COMPONENTS
import Nav from '../Nav/Nav';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import './UserPage.css';

// main user home page
class UserPage extends Component {
  render() {
    return (
      < div >
        <Nav />
        <div className="userDiv">
          <CssBaseline />
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className="userWelcome">
                <Avatar className="userAvatar">
                  <PersonIcon />
                </Avatar>
                <div className="userTextDivGreeting">
                  <Typography className="userTextGreeting" component="h1" variant="h5">
                    Welcome {this.props.store.user.username}!
              </Typography>
                </div>
              </div>
            </Grid>
            <Grid className="userItem" item xs={12} md={2}>
              <div className="userTextDiv">
                <Typography className="userText" component="h1" variant="h5">
                  Health Journal
                </Typography>
              </div>
              <CssBaseline />
              <Link to="/journaltable">
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
        </div >
        <AppFooter />
      </div >
    );
  }
};// end UserPage

export default connect(mapStoreToProps)(UserPage);