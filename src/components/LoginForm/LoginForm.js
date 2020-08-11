import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import "./LoginForm.css"
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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';


class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="login">
        <Card onSubmit={this.login}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
              <ArrowBackIcon className="arrow" />
              <Avatar className="avatar">
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Log in to your profile
                    </Typography>
              {this.props.store.errors.loginMessage && (
                <h3
                  className="alert"
                  role="alert"
                >
                  {this.props.store.errors.loginMessage}
                </h3>
              )}
              <form className="form" noValidate>
                <TextField

                  margin="normal"
                  required
                  fullWidth

                  label="Username"


                  autoFocus
                  type="text"
                  name="username"
                  required
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('username')}
                />
                <TextField

                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  type="password"
                  name="password"
                  required
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="logbutton"
                  variant="contained"
                  color="primary"
                  type="submit"
                  value="Log In"
                >
                  Log In
                         </Button>
                <center>
                  <Link to="/registration">
                    <Button
                      className="button"
                      color="primary"
                      type="button"


                    >
                      Register
          </Button>
                  </Link>
                </center>
              </form>
            </div>
          </Container>
        </Card>

      </div >


    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
