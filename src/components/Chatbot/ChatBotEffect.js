import React from 'react';
import { useSpring, animated } from 'react-spring';

// CUSTOM COMPONENTS
import Chatbot from './Chatbot';


// adding react-spring to ChatBot component
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
} // end ChatBotEffect

export default ChatBotEffect;
