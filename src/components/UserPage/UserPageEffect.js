import React from 'react';
import { useSpring, animated } from 'react-spring';

// CUSTOM COMPONENTS
import UserPage from '../UserPage/UserPage';

// adding react-spring to UserPage
const UserPageEffect = () => {
    const fade = useSpring({
        from: {
            opacity: 0.5
        },
        opacity: 1
    });
    return (
        <animated.div style={fade}>
            <UserPage />
        </animated.div>
    );
};// end UserPageEffect

export default UserPageEffect;