import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import Nav from "../NewLandingPage/modules/views/Nav";
import { Link } from 'react-router-dom';
import JournalPageForm from '../JournalPageForm/JournalPageForm';
import JournalPageTable from '../JournalPageTable/JournalPageTable';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class JournalPage extends Component {
    render() {
        return (
            <div>
                <Nav />
                <h1>Journal Page</h1>
                <JournalPageForm />
                <JournalPageTable />
                <AppFooter />
            </div>
        );
    }
}

export default connect(mapStoreToProps)(JournalPage);
