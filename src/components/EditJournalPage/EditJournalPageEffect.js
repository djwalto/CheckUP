import React from 'react';
import { useSpring, animated } from 'react-spring';
import EditJournalPage from './EditJournalPage';

// adding react-spring to EditJournalPage component
const EditJournalPageEffect = () => {
    const fade = useSpring({
        from: {
            opacity: 0
        },
        opacity: 1
    });
    return (
        <animated.div style={fade}>
            <EditJournalPage />
        </animated.div>
    );
}// end EditJournalPageEffect

export default EditJournalPageEffect;
