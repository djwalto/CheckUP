import React from 'react';
import { useSpring, animated } from 'react-spring';
import LoginPage from '../LoginPage/LoginPage';





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
}
export default LoginFormEffect;
