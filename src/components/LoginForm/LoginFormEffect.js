import React from 'react';
import { useSpring, animated } from 'react-spring';

// CUSTOM COMPONENTS
import LoginPage from '../LoginPage/LoginPage';

// adding react-spring to LoginForm component
const LoginFormEffect = () => {
    const fade = useSpring({
        from: {
            opacity: 0.5
        },
        opacity: 1
    });
    return (
        <animated.div style={fade}>
            <LoginPage />
        </animated.div>
    );
}// end LoginFormEffect

export default LoginFormEffect;
