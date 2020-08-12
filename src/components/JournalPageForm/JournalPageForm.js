import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import Nav from "../NewLandingPage/modules/views/Nav";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class JournalPageForm extends Component {
    state = {
        feeling: '',
        symptoms: '',
    };

    onInputChange = (input) => (event) => {
        this.setState({
            [input]: (event.target.value),
        });
    };

    onClick = (event) => {
        if (this.state.feeling === '' || this.state.symptoms === '') {
            alert('You forgot to answer!');
            return;
        }
        this.addToState();
        console.log(this.state);
        this.props.dispatch({
            type: 'SET_FORM',
            payload: {
                feeling: this.state.feeling,
                symptoms: this.state.symptoms,
            }
        });
    };

    addToState = (event) => {
        this.setState({
            feeling: this.state.feeling,
            symptoms: this.state.symptoms,
        });
    };

    render() {
        return (
            <div className="container">
                <div className="card text-center">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            <h1>How are you feeling?</h1>
                        </div>
                        <div className="card-body text-dark">

                            <div>
                                <input type="text" onChange={this.onInputChange('feeling')} />
                            </div>
                            <div>
                                <input type="text" onChange={this.onInputChange('symptoms')} />
                            </div>
                            <br></br>
                            <Button variant="primary" onClick={this.onClick}>
                                Next
                  </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(JournalPageForm);
