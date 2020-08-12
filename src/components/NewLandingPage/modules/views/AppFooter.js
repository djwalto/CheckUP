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


        <AppBar position="static" className="footer">
            <Container maxWidth="md" className="container">
                <Toolbar>
                    <Typography variant="body1" color="inherit" component="footer" className="root">

                        shjfsjf shfijsbvf jkbvjsdbfvk  fvbkjbvskjsf


                        <h6 >GitHub</h6>





                                                &copy; 2020 CheckUP Health
              </Typography>
                </Toolbar>
            </Container>
        </AppBar>



    );
}