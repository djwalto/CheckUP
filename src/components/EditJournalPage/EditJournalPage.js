
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import Nav from "../NewLandingPage/modules/views/Nav";
import AppFooter from "../NewLandingPage/modules/views/AppFooter";


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
        console.log(this.props.location.state.data);
        let rowid = (this.props.location.state.data);
        // this.setState({
        //     id: rowid
        // })
        console.log(rowid);
        this.setState({
            id: rowid
        })
        console.log(this.props.store.formReducer);
        console.log(this.props.store.user.username);

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


    onClick = (id) => (event) => {
        console.log(id);
        this.setDate();

        // if (this.state.feeling === '' || this.state.symptoms === '') {
        //     alert('You forgot to answer!');
        //     return;
        // }
        // this.addToState();
        console.log(this.state);
        this.props.dispatch({
            type: 'PUT_FORM',
            payload: this.state
        });
    };
    render() {
        return (
            <div>
                <Nav />

                <div className="journalFormDiv">

                    <CssBaseline />
                    <div className="userWelcome">
                        <Avatar className="userAvatar">
                            <PersonIcon />
                        </Avatar>
                        <div className="journalGreeting"><h1>{this.props.store.user.username}</h1></div>
                        <Link to="/journaltable">
                            <ArrowBackIcon className="editArrowIcon" />
                        </Link>
                    </div>
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
                                    Change Your Journal Entry
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
                                        <Link to="/journaltable">
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                className="logbutton"
                                                variant="contained"
                                                color="primary"
                                                type="submit"
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



