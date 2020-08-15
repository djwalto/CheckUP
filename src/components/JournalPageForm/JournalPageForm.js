
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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import './JournalPageForm.css';



class JournalPageForm extends Component {

    state = {
        feeling: '',
        symptoms: '',
    };

    onInputChange = (input) => (event) => {
        this.setState({
            [input]: (event.target.value),
        }, () => { console.log(this.state) });
    };

    onClick = (event) => {
        if (this.state.feeling === '' || this.state.symptoms === '') {
            alert('You forgot to answer!');
            return;
        }
        // this.addToState();
        console.log(this.state);
        this.props.dispatch({
            type: 'POST_FORM',
            payload: this.state
        });
    };

    // addToState = (event) => {
    //     this.setState([{
    //         feeling: this.state.feeling,
    //         symptoms: this.state.symptoms,
    //     }]);
    // };

    render() {


        return (

            <div className="journalFormDiv">
                <Card className="journalFormCard">
                    <Container className="journalFormContainer" component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className="journalFormPaper">

                            <ArrowBackIcon className="journalFormArrow" />
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

                                    onChange={this.onInputChange('feeling')}
                                />
                                <TextField

                                    margin="normal"
                                    required
                                    fullWidth

                                    label="Did you have any symptoms today?"


                                    autoFocus
                                    type="text"
                                    name="symptoms"
                                    required

                                    onChange={this.onInputChange('symptoms')}
                                />

                                <center>
                                    <Button
                                        type="submit"

                                        variant="contained"
                                        color="primary"
                                        className="logbutton"
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        value="Log In"
                                        onClick={this.onClick}
                                    >


                                        Submit
                  </Button>
                                </center>
                                <Link to="/home">
                                    <HomeIcon className='journalFormHome' />
                                </Link>
                            </form>
                        </div>
                    </Container>
                </Card>
            </div >


        );
    }

}


export default connect(mapStoreToProps)(JournalPageForm);



