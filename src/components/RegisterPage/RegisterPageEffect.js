import React from 'react';
import { useSpring, animated } from 'react-spring';
import RegisterPage from '../RegisterPage/RegisterPage';





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
}
export default RegisterPageEffect;
