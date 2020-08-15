
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
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import '../JournalPageForm/JournalPageForm.css';
import MenuListComposition from './MenuButton';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import Nav from "../NewLandingPage/modules/views/Nav";



class AddProfilePage extends Component {

    state = {
        profileName: '',

    };

    componentDidMount() {
        console.log(this.props.store.user.username);
    }

    onInputChange = (input) => (event) => {
        this.setState({
            [input]: (event.target.value),
        }, () => { console.log(this.state) });
    };

    onClick = (event) => {
        if (this.state.profileName === '') {
            alert('You forgot to answer!');
            return;
        }
        this.props.history.push('/journal');
        // this.addToState();
        console.log(this.state);
        this.props.dispatch({
            type: 'POST_PROFILE',
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
            <div>
                <Nav />
                <div className="journalFormDiv">
                    <CssBaseline />


                    <div className="userWelcome">
                        <Avatar className="userAvatar">
                            <PersonIcon />
                        </Avatar>
                        <div className="journalGreeting"><h1>{this.props.store.user.username}</h1></div>


                        <MenuListComposition />

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
                                    Add Another Profile
                  </Typography>
                                <form className="journalForm" noValidate>
                                    <TextField

                                        margin="normal"
                                        required
                                        fullWidth

                                        label="Profile Name"


                                        autoFocus
                                        type="text"
                                        name="profileName"
                                        required

                                        onChange={this.onInputChange('profileName')}
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
                <AppFooter />
            </div>

        );
    }

}


export default connect(mapStoreToProps)(AddProfilePage);
