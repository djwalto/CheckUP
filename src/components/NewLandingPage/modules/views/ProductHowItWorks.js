import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MapIcon from '@material-ui/icons/Map';
import PersonIcon from '@material-ui/icons/Person';
const styles = (theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#faf9f1',
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    title: {
        marginBottom: theme.spacing(14),
    },
    number: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightMedium,
    },
    image: {
        height: 55,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
        opacity: 0.7,
    },
    button: {
        marginTop: theme.spacing(8),
        backgroundColor: '#60BFBF',
        color: 'white',
    },
});

function ProductHowItWorks(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <img
                    src="../"
                    className={classes.curvyLines}
                    alt="curvy lines"
                />
                <Typography variant="h4" className={classes.title} component="h2">
                    How it works
        </Typography>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>1.</div>
                                <MenuBookIcon />

                                <Typography variant="h5" align="center">
                                    CheckUP Journal allows you to keep track of how you or a loved 
                                    one was feeling, or if any symptoms were present for easy reference during healthcare visits.
                                      
                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>2.</div>
                                {/* <img
                                    src=""
                                    alt="graph"
                                    className={classes.image}
                                /> */}
                                <MapIcon/>
                                <Typography variant="h5" align="center">
                                    COVID CheckUP Tracker pulls the most recent data relating to Covid-19 classes including
                                    total cases, recoveries, and more.
                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>3.</div>
                                {/* <img
                                    src="/static/themes/onepirate/productHowItWorks3.svg"
                                    alt="clock"
                                    className={classes.image}
                                /> */}
                                <PersonIcon />
                                <Typography variant="h5" align="center">
                                    {'COVID Symptom CheckUP uses the latest in artificial intelligence '}
                                    {'to help you determine your next step if symptoms are present.'}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Button
                    color="secondary"
                    size="large"
                    variant="contained"
                    className={classes.button}
                    component="a"
                    href="/premium-themes/onepirate/sign-up/"
                >
                    Get started
        </Button>
            </Container>
        </section>
    );
}

ProductHowItWorks.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);