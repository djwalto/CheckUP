import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import Nav from "../NewLandingPage/modules/views/Nav";
import Button from "@material-ui/core/Button";
import AppFooter from '../NewLandingPage/modules/views/AppFooter';

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
}

export default connect(mapStoreToProps)(LoginPage);
