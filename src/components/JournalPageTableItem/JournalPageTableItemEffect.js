import React from 'react';
import { useSpring, animated } from 'react-spring';

// CUSTOM COMPONENTS
import JournalPageTableItem from './JournalPageTableItem';

// adding react-spring to JournalPageTableItem component
const JournalPageTableItemEffect = () => {
    const fade = useSpring({
        from: {
            opacity: 0
        },
        opacity: 1
    });
    return (
        <animated.div style={fade}>
            <JournalPageTableItem />
        </animated.div>
    );
}// end JournalPageTableItemEffect

export default JournalPageTableItemEffect;
