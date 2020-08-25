import React from 'react';
import { useSpring, animated } from 'react-spring';
import Chatbot from './Chatbot';


const ChatBotEffect = () => {
    const fade = useSpring({
        from: {
            opacity: 0.5,
        },
        opacity: 1
    });

    return (
        <animated.div style={fade}>
            <Chatbot />
        </animated.div>
    );
}

export default ChatBotEffect;
