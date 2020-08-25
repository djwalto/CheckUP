import React from 'react';
import { useSpring, animated } from 'react-spring';

// CUSTOM COMPONENT
import RegisterPage from '../RegisterPage/RegisterPage';

// adding react-spring to RegisterPage
const RegisterPageEffect = () => {
    const fade = useSpring({
        from: {
            opacity: 0.5
        },
        opacity: 1
    });

    return (
        <animated.div style={fade}>
            <RegisterPage />
        </animated.div>
    );
};// end RegisterPageEffect

export default RegisterPageEffect;
