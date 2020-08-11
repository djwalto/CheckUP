import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import Nav from "../NewLandingPage/modules/views/Nav";

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

        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.history.push('/login') }}
          >
            Login
          </button>
        </center>
        <AppFooter />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);

