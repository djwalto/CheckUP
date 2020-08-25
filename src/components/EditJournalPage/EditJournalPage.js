
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

import Nav from "../Nav/Nav";
import AppFooter from "../NewLandingPage/modules/views/AppFooter";
import './EditJournalPage.css';

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import BookIcon from '@material-ui/icons/Book';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import swal from "sweetalert";

class EditJournalPage extends Component {
    state = {
        id: '',
        date: this.setDate(),
        feeling: '',
        symptom: '',
        medication: '',
        contact: '',
    };

    componentDidMount() {
        this.props.dispatch({ type: 'GET_FORM' });
        let rowid = (this.props.location.state.data);
        const idArray = this.props.store.formReducer.map((item, index) => {
            if (item.id === rowid) {
                this.setState({
                    id: this.props.location.state.data,
                    feeling: item.feeling,
                    symptoms: item.symptom,
                    medication: item.medication,
                    contact: item.contact
                })
            }
        })
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

    onClick = () => (event) => {
        swal({
            title: "Edit your journal?",
            text: "This will update your journal with your new info",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Updated!", {
                        icon: "success",
                    });
                } else {
                    return;
                }
            });
        this.setDate();
        this.props.dispatch({
            type: 'PUT_FORM',
            payload: this.state
        });
    };
    render() {
        return (
            <div>
                <Nav />
                <div className="editJournalFormDiv">
                    <CssBaseline />
                    <div className="userWelcome">
                        <Link to="/journaltable">
                            <ArrowBackIcon className="editArrowIcon" />
                        </Link>
                    </div>
                    <br></br>
                    <h3>Back to Journal</h3>
                    <Card className="editJournalFormCard">
                        <Container className="editJournalFormContainer" component="main" maxWidth="xs">
                            <CssBaseline />
                            <div className="editJournalFormPaper">
                                <br></br>
                                <br></br>
                                <Avatar className="editJournalFormAvatar">
                                    <BookIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Change Your Journal Entry
                             </Typography>
                                <form className="editJournalForm" noValidate>
                                    <TextField
                                        margin="normal"
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
                                        <Link to="/journaltable">
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                className="logbutton"
                                                value="Log In"
                                                onClick={this.onClick(this.props)}
                                            >
                                                Submit
                                        </Button>
                                        </Link>
                                    </center>
                                </form>
                            </div>
                        </Container>
                    </Card>
                </div >
                <AppFooter />
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EditJournalPage);



