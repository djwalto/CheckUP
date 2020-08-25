import React from 'react';
import { useSpring, animated } from 'react-spring';
import CovidTrackerPage from './CovidTrackerPage';


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
