import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import "./LoginForm.css"

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

      <div className="loginDiv">
        <div className="overlay">

          <Card className="loginCard" onSubmit={this.login}>
            <Container className="loginContainer" component="main" maxWidth="xs">
              <CssBaseline />
              <div className="loginPaper">
                <ArrowBackIcon className="loginArrow" />
                <br></br>
                <br></br>
                <Avatar className="loginAvatar">
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
                <form className="loginForm" noValidate>
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
        </div>
      </div >


    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
