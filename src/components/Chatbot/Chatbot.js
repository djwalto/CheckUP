import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// CUSTOM COMPONENTS
import Nav from '../Nav/Nav';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import './Chatbot.css';

// component for displaying Covid ChatBot
class Chatbot extends Component {
    state = {
        response: {}
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.innerHTML = `window.__be = window.__be || {};
    window.__be.id = "5f2ed951b474b30007309790";
    (function() {
        var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
        be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
    })();`
        this.div.appendChild(script);
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="chatDiv">
                    <Link to="/admin">
                        <ArrowBackIcon className="chatArrowIcon" />
                    </Link>
                    <h3 className="backToText">Back to Home</h3>
                    <div className="chatbot" ref={el => (this.div = el)}>
                    </div>
                </div>
                <AppFooter />
            </div>
        )
    }
} // end chatbot

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Chatbot)