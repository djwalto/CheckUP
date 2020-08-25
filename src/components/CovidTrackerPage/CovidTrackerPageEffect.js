import React from 'react';
import { useSpring, animated } from 'react-spring';

// CUSTOM COMPONENT
import CovidTrackerPage from './CovidTrackerPage';

// adding react-spring to CovidTrackerPage component
const CovidTrackerPageEffect = () => {
    const fade = useSpring({
        from: {
            opacity: 0.5,
        },
        opacity: 1
    });
    return (
        <animated.div style={fade}>
            <CovidTrackerPage />
        </animated.div>
    );
}

export default CovidTrackerPageEffect;
