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
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
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
                  required
                  fullWidth

                  label="Name"


                  autoFocus
                  type="text"
                  name="username"
                  type="text"
                  name="username"
                  //value={this.state.username}
                  required
                //onChange={this.handleInputChangeFor('username')}
                />
                <TextField

                  margin="normal"
                  required
                  fullWidth

                  label="Birth Year"


                  autoFocus
                  type="text"
                  name="username"
                  type="text"
                  name="username"
                  // value={this.state.username}
                  required
                //onChange={this.handleInputChangeFor('username')}
                />
                <TextField

                  margin="normal"
                  required
                  fullWidth

                  label="Username"


                  autoFocus
                  type="text"
                  name="username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  required
                  onChange={this.handleInputChangeFor('username')}
                />


                <div>
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

                    type="password"
                    name="password"
                    value={this.state.password}
                    required
                    onChange={this.handleInputChangeFor('password')}
                  />

                  <Button className="genderM" variant="contained"
                    color="inherit">Male</Button><Button className="genderF" variant="contained"
                      color="inherit">Female</Button>
                  <Button className="register"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"

                    variant="contained"
                    color="primary"
                    type="submit"
                    value="Log In"

                    name="submit"
                    value="Register"
                  >Register
                     </Button>
                  <center>
                    <Button
                      type="logbutton"
                      className="link-button"
                      onClick={() => { this.props.history.push('/login') }}
                    >
                      Login
          </Button>
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
