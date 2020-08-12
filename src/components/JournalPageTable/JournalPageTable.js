import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import Nav from "../NewLandingPage/modules/views/Nav";
import { Link } from 'react-router-dom';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class JournalPage extends Component {
    render() {
        return (
            <div>

                <h1>Journal Page Table</h1>


            </div>
        );
    }
}

export default connect(mapStoreToProps)(JournalPage);
