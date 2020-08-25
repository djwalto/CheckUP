import React from 'react';
import { useSpring, animated } from 'react-spring';
import NewLandingPage from '../../../NewLandingPage/NewLandingPage';

// adding react-spring to NewLandingPage Component
const NewLandingPageEffect = () => {
    const fade = useSpring({
        from: {
            opacity: 0.5
        },
        opacity: 1
    });
    return (
        <animated.div style={fade}>
            <NewLandingPage />
        </animated.div>
    );
};// end NewLandingPageEffect

export default NewLandingPageEffect;
