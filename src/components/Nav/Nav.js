import React from "react";
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

import Typography from "@material-ui/core/Typography";

const Nav = (props) => {
    let loginLinkData = {
        path: '/login',
        text: 'Login',
    };

    if (props.store.user.id != null) {
        loginLinkData.path = '/admin';
        loginLinkData.text = 'Home';
    }

    return (
        <>

            <div className="nav">

                <Link to="/home">

                    <h2 className="nav-title">CheckUP Health</h2>
                </Link>

                <div className="nav-right">

                    <Typography
                        variant="h6"
                        underline="none"
                        color="inherit">
                        <Link className="nav-link"

                            to={loginLinkData.path}>
                            {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
                            {loginLinkData.text}


                        </Link>

                    </Typography>

                    {/* Show the link to the info page and the logout button if the user is logged in */}
                    {props.store.user.id && (
                        <>

                            <LogOutButton

                                className="nav-link" />

                        </>
                    )}
                    {/* Always show this link since the about page is not protected */}


                </div>

            </div>


        </>

    );
};

export default connect(mapStoreToProps)(Nav);
