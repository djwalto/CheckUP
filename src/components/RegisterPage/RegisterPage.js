import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import Nav from "../Nav/Nav";


class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <div>
        <Nav />
        <RegisterForm />
        <AppFooter />
      </div>
    );
  }
};// end RegisterPage

export default connect(mapStoreToProps)(RegisterPage);

