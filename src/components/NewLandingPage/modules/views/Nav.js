import React from "react";
import { connect } from 'react-redux';
import LogOutButton from '../../../LogOutButton/LogOutButton';
import '../../../../components/Nav/Nav.css';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";

const Nav = (props) => {
    let loginLinkData = {
        path: '/login',
        text: 'Login / Register',
    };

    if (props.store.user.id != null) {
        loginLinkData.path = '/admin';
        loginLinkData.text = 'Home';
    }

    return (
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
                        <Typography
                            variant="h6"
                            underline="none"
                            color="inherit">
                            <Link className="nav-link"
                                to="/info">

                                Info Page
            </Link>
                        </Typography>
                        <LogOutButton

                            className="nav-link" />
                    </>
                )}
                {/* Always show this link since the about page is not protected */}
                <Typography
                    variant="h6"
                    underline="none"
                    color="inherit">
                    <Link className="nav-link"

                        to="/about">
                        About
        </Link>
                </Typography>
            </div>
        </div>
    );
};

export default connect(mapStoreToProps)(Nav);
