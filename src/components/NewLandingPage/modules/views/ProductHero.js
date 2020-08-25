import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';

// CUSTOM COMPONENTS
import ProductHeroLayout from './ProductHeroLayout';
import './ProductHero.css';

const backgroundImage =
    'https://images.unsplash.com/photo-1589169011402-8b2cbd1ee593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2294&q=80';

const styles = (theme) => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9',
        backgroundPosition: 'center',
    },
    button: {
        backgroundColor: '#2597f5',
        color: 'white',
        minWidth: 200,
    },
    text: {
        textTransform: 'none',
    },
    h5: {
        textTransform: 'none',
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
        },
    },
    more: {
        marginTop: theme.spacing(2),
    },
});

function ProductHero(props) {
    const { classes } = props;
    return (
        <>
            <section class="section static">
                <ProductHeroLayout backgroundClassName={classes.background}>
                    <br></br>
                    <Typography className={classes.text} color="inherit" align="center" variant="h2" >
                        Welcome to CheckUP Health
                    </Typography>
                    <Typography className={classes.text} color="inherit" align="center" variant="h5" className={classes.h5}>
                        The path to great health starts with your own self-care and
                    <br></br>
                        we are here to help guide you along the way
                    </Typography>
                    <Link className="landinglinks" to="/registration">
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            component="a"
                            push="/registration"
                        >
                            Register
                        </Button>
                    </Link >
                </ProductHeroLayout>
            </section>
        </>
    );
};// end ProductHero

ProductHero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);