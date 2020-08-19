import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import "./AppFooter.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";







export default function AppFooter() {



    return (


        <div id="footer">
            <AppBar position="static" className="footer">
                <Container maxWidth="md" className="container">
                    <Toolbar>
                        <Typography variant="body1" color="inherit" component="footer" className="root">




                            <h5 ><a className="links" href="https://github.com/djwalto" target="_blank">GitHub</a></h5>
                            <h5 ><a className="links" href="https://www.linkedin.com/in/davidwaltonkc/" target="_blank">LinkedIn</a></h5>
                            <h5 ><a className="links" href="mailto:davidjwalton2020@gmail.com" target="_blank">Email</a></h5>






                        </Typography>
                        <div className="copyright">
                            <h3 className="copy">    &copy; 2020 CheckUP Health</h3>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>

        </div>

    );
}