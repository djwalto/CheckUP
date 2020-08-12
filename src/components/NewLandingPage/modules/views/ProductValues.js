import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MapIcon from '@material-ui/icons/Map';
import PersonIcon from '@material-ui/icons/Person';
import './ProductValues.css';
import Card from "@material-ui/core/Card";

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: '#fffffe',
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: 'flex',
        position: 'relative',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),

    },
    image: {
        height: 55,
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
    },
});

function ProductValues(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>

                            <MenuBookIcon className="book" />
                            <Typography variant="h6" className={classes.title}>
                                CheckUP Journal
              </Typography>
                            <Typography variant="h5">
                                {'Keep track of your own health, '}
                                {'as well as your loved ones with your daily health journal.'}
                            </Typography>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            <img
                            // className={classes.image}
                            // src="/static/themes/onepirate/productValues2.svg"
                            // alt="graph"
                            />
                            <MapIcon className="map" />
                            <Typography variant="h6" className={classes.title}>
                                COVID CheckUP Tracker
              </Typography>
                            <Typography variant="h5">
                                {'Stay up to date with the latest COVID-19 numbers '}
                                {'from all around the world including USA.'}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            {/* <img
                                className={classes.image}
                                src="/static/themes/onepirate/productValues3.svg"
                                alt="clock"
                            /> */}
                            <PersonIcon className="person" />
                            <Typography variant="h6" className={classes.title}>
                                COVID SYMPTOM CHECKUP
              </Typography>
                            <Typography variant="h5">
                                {'Having symptoms? '}
                                {'Our Infermedica ChatBot is specifically designed to check your symptoms.'}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

ProductValues.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);