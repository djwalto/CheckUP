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
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';



const styles = (theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#fffffe',
        overflow: 'hidden',
        textTransform: 'none',
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
    number1: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.secondary,
        fontWeight: theme.typography.fontWeightMedium,
        marginRight: theme.spacing(15),
    },
    number2: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.secondary,
        fontWeight: theme.typography.fontWeightMedium,
       
    },
    number3: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.secondary,
        fontWeight: theme.typography.fontWeightMedium,
        marginLeft: theme.spacing(15),
    },
    image1: {
        height: 255,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        marginRight: theme.spacing(5),
    },
    image2: {
        height: 255,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        marginLeft: theme.spacing(-5),
    },
    image3: {
        height: 255,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        marginLeft: theme.spacing(5),
    }, 

text1: {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    textTransform: 'none',
},
text2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    textTransform: 'none',
},
text3: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    textTransform: 'none',
},
textBox1: {
    // display: 'flex',
    width: 355,
    marginRight: theme.spacing(15),
    flexDirection: 'column',
    // alignItems: 'center',
    // padding: theme.spacing(0, 5),
    textTransform: 'none',
},
textBox2: {
    width: 355,
   
    flexDirection: 'column',
    // alignItems: 'center',
    // padding: theme.spacing(0, 5),
    textTransform: 'none',
},
textBox3: {
    width: 355,
    marginLeft: theme.spacing(20),
    flexDirection: 'column',
    // alignItems: 'center',
    // padding: theme.spacing(0, 5),
    textTransform: 'none',
    },
    button: {
        marginTop: theme.spacing(8),
        backgroundColor: '#2597f5',
        color: 'white',
        
        
    },
});

function ProductHowItWorks(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
             
                <Typography variant="h4" className={classes.title} component="h2">
                    {/* How it works */}
        </Typography>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number1}></div>
                                <img
                                    src="https://images.unsplash.com/photo-1537072087284-b53024c3f332?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                                    alt="graph"
                                    className={classes.image1}
                                /> 
                               
<div className={classes.textBox1}>
                                <Typography className={classes.text1} variant="h5" align="center">
                                    CheckUP Health Journal allows you to keep track of how you are feeling, 
                                    or if any symptoms were present for easy reference during healthcare visits.
                                      
                </Typography>
                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number2}></div>
                                <img
                                    src="https://images.unsplash.com/photo-1584757283930-246cb931242b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                                    alt="graph"
                                    className={classes.image2}
                                /> 
                               <div className={classes.textBox2}>
                                <Typography className={classes.text2}variant="h5" align="center">
                                    COVID CheckUP Tracker pulls the most recent data relating to Covid-19 classes including
                                    total cases, recoveries, and more.
                </Typography>
                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number3}></div>
                                <img
                                    src="https://images.unsplash.com/photo-1548101307-a757d5f06d27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                                    alt="clock"
                                    className={classes.image3}
                                /> 
                               <div className={classes.textBox3}>
                                <Typography className={classes.text3} variant="h5" align="center">
                                    {'COVID Symptom CheckUP uses the latest in artificial intelligence '}
                                    {'to help you determine your next step if symptoms are present.'}
                                </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
           
            </Container>
        </section>
    );
}

ProductHowItWorks.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);