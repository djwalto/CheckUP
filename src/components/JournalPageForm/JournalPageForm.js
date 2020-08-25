import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import BookIcon from '@material-ui/icons/Book';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import swal from 'sweetalert';

// CUSTOM COMPONENTS
import "./JournalPageForm.css";
import Nav from "../Nav/Nav";

// component for entering in journal entries
class JournalPageForm extends Component {
    state = {
        user_id: this.props.store.user.id,
        date: this.setDate(),
        feeling: '',
        symptoms: '',
        medication: '',
        contact: '',
    };// end state

    // on page load we get all journal entries from db
    componentDidMount() {
        this.props.dispatch({ type: 'GET_FORM' });
    }// end componentDidMount

    // captures the change on each input
    onInputChange = (input) => (event) => {
        this.setState({
            [input]: (event.target.value),
        }, () => { console.log(this.state) });
    };// end onInputChange

    // sets todays date as entry date on health journal
    setDate() {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        let today = month + "-" + day + "-" + year;
        return today;
    }// end setDate

    // event listener which dispatches post to saga
    // uses alert to confirm journal entry success then push to table
    onClick = (event) => {
        this.setDate();
        this.props.dispatch({
            type: 'POST_FORM',
            payload: this.state
        }
        );
        swal({
            title: "Way to go!",
            text: "You journal entry was saved!",
            icon: "success",
            button: "Keep it up!",
        });
        this.props.history.push('/journaltable');
    };// end onClick

    render() {
        return (
            <div>
                <Nav />
                <div className="journalFormDiv">
                    <CssBaseline />
                    <Link to="/admin">
                        <ArrowBackIcon className="editArrowIcon" />
                    </Link>
                    <br></br>
                    <h3>Back to Home</h3>
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
                                        variant="outlined"
                                        onChange={this.onInputChange('feeling')}
                                    />
                                    <TextField
                                        margin="normal"
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
            </div >
        );
    }
};// end JournalPageForm


export default connect(mapStoreToProps)(JournalPageForm);



