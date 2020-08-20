import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
//import AppPage from '../CovidTrackerPage/AppPage';

import AboutPage from '../AboutPage/AboutPage';
import UserPageEffect from '../InfoPage/UserPageEffect.js';
import InfoPage from '../InfoPage/UserPageEffect.js';
import NewLandingPage from '../NewLandingPage/NewLandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
// import JournalPageForm from '../JournalPageForm/JournalPageForm';
import ChatBotEffect from '../Chatbot/ChatBotEffect';
import JournalPageTableItem from '../JournalPageTableItem/JournalPageTableItem';
import EditJournalPage from '../EditJournalPage/EditJournalPage';
import './App.css';
import CovidTrackerPageEffect from '../CovidTrackerPage/CovidTrackerPageEffect';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>

          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              exact
              path="/admin"
              component={UserPageEffect}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will be redirected to the authRedirect path provided. */}
            <ProtectedRoute
              exact
              path="/login"
              authRedirect="/admin"
              component={LoginPage}
            />
            <ProtectedRoute
              exact
              path="/registration"
              authRedirect="/admin"
              component={RegisterPage}
            />
            <ProtectedRoute
              exact
              path="/home"
              authRedirect="/admin"
              component={NewLandingPage}
            />
            {/* <ProtectedRoute
              exact
              path="/journalform"
              // authRedirect="/journal"
              component={JournalPageForm}
            /> */}
            <ProtectedRoute
              exact
              path="/journaltable"
              // authRedirect="/journal"
              component={JournalPageTableItem}
            />
            <ProtectedRoute
              exact
              path="/editjournal/:id"
              // authRedirect="/journal"
              component={EditJournalPage}
            />
            <ProtectedRoute
              exact
              path="/tracker"
              // authRedirect="/journal"
              component={CovidTrackerPageEffect}
            />
            <ProtectedRoute
              exact
              path="/chat"
              // authRedirect="/journal"
              component={ChatBotEffect}
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>


        </div>
      </Router>
    )
  }
}

export default connect()(App);