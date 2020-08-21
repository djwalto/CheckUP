
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import "./JournalPageForm.css"
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import BookIcon from '@material-ui/icons/Book';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import Nav from "../NewLandingPage/modules/views/Nav";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

class JournalPageForm extends Component {

    state = {
        user_id: this.props.store.user.id,
        date: this.setDate(),
        feeling: '',
        symptoms: '',
        medication: '',
        contact: '',
    };

    componentDidMount() {

        console.log(this.props.store.user.username);
        this.props.dispatch({ type: 'GET_FORM' });
    }

    onInputChange = (input) => (event) => {
        this.setState({
            [input]: (event.target.value),
        }, () => { console.log(this.state) });
    };

    setDate() {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        let today = month + "-" + day + "-" + year;
        return today;

    }
    onClick = (event) => {
        this.setDate();
        console.log(this.state);
        this.props.dispatch({
            type: 'POST_FORM',
            payload: this.state
        }
        );
        this.props.history.push('/journaltable');
    };

    render() {
        return (
            <div>
                <Nav />
                <div className="journalFormDiv">
                    <CssBaseline />
                    {/* <div className="userWelcome">
                        <Avatar className="userAvatar">
                            <PersonIcon />
                        </Avatar>
                        <div className="journalGreeting"><h1>{this.props.store.user.username}</h1></div> */}
                    <Link to="/admin">
                        <ArrowBackIcon className="editArrowIcon" />

                    </Link>
                    <br></br>
                    <h3>Back to Home</h3>
                    {/* </div> */}
                    <Card className="journalFormCard">
                        <Container className="journalFormContainer" component="main" maxWidth="xs">
                            <CssBaseline />
                            <div className="journalFormPaper">
                                <br></br>
                                <br></br>
                                <Avatar className="journalFormAvatar">
                                    <BookIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Health Journal
                                </Typography>
                                <form className="journalForm" noValidate>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="How did you feel today?"
                                        autoFocus
                                        type="text"
                                        name="feelings"
                                        required
                                        variant="outlined"
                                        onChange={this.onInputChange('feeling')}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Did you have any symptoms today?"
                                        variant="outlined"
                                        autoFocus
                                        type="text"
                                        name="symptoms"
                                        required
                                        onChange={this.onInputChange('symptoms')}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Did you take any medications today?"
                                        autoFocus
                                        type="text"
                                        name="medications"
                                        required
                                        variant="outlined"
                                        onChange={this.onInputChange('medication')}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Have you had contact with anyone diagnosed with COVID-19?"
                                        variant="outlined"
                                        autoFocus
                                        type="text"
                                        name="contact"
                                        required
                                        onChange={this.onInputChange('contact')}
                                    />
                                    <center>
                                        <Button
                                            type="submit"

                                            className="longbutton"
                                            variant="contained"


                                            value="Log In"
                                            className="button"
                                            color="primary"

                                            onClick={this.onClick}
                                        >
                                            Submit
                                        </Button>


                                    </center>
                                </form>
                            </div>
                        </Container>
                    </Card>
                </div >
                {/* <JournalPageTableItem /> */}

            </div >

        );
    }
}


export default connect(mapStoreToProps)(JournalPageForm);



