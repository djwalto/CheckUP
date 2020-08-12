import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
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
import "./RegisterForm.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
    email: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      },
    });
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="login">
        <Card onSubmit={this.registerUser}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
              <ArrowBackIcon className="arrow" />
              <Avatar className="avatar">
              </Avatar>
              <Typography component="h1" variant="h5">
                Register your profile
                </Typography>
              {this.props.errors.registrationMessage && (
                <h3
                  className="alert"
                  role="alert"
                >
                  {this.props.errors.registrationMessage}
                </h3>
              )}
              <form className="form" noValidate>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Username"
                  autoFocus
                  type="text"
                  name="username"
                  value={this.state.username}
                  required
                  onChange={this.handleInputChangeFor('username')}
                />
                <div>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={this.state.password}
                    required
                    onChange={this.handleInputChangeFor('password')}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Email"
                    autoFocus
                    type="text"
                    name="email"
                    id="email"
                    value={this.state.email}
                    required
                    onChange={this.handleInputChangeFor('email')}
                  />

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
                </div>

              </form>

            </div>
          </Container>
        </Card>
      </div >


    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
