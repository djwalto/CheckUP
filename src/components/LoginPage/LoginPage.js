import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import LoginForm from '../LoginForm/LoginForm';
import Nav from "../Nav/Nav";
import AppFooter from '../NewLandingPage/modules/views/AppFooter';

// component for log in page with nav bar and footer
class LoginPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LoginForm />
        <AppFooter />
      </div>
    );
  }
};// end LoginPage

export default connect(mapStoreToProps)(LoginPage);
