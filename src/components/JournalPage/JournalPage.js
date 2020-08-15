import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import Nav from "../NewLandingPage/modules/views/Nav";
import JournalPageForm from '../JournalPageForm/JournalPageForm';
import JournalPageTable from '../JournalPageTable/JournalPageTable';
import '../JournalPageForm/JournalPageForm.css';


class JournalPage extends Component {
    render() {
        return (
            <div>
                <Nav />
                <JournalPageForm />
                <JournalPageTable />
                <AppFooter />
            </div >
        );
    }
}

export default connect(mapStoreToProps)(JournalPage);
