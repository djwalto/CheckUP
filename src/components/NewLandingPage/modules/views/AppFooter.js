import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import "./AppFooter.css";






export default function AppFooter() {


    return (
        <Typography component="footer" className="root">
            <Container className="container">



                <p className="copy">CheckUP 2020</p>


            </Container>
        </Typography>
    );
}