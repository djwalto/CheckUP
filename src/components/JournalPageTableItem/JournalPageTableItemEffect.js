import React from 'react';
import { useSpring, animated } from 'react-spring';
import JournalPageTableItem from './JournalPageTableItem';

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
}

export default JournalPageTableItemEffect;
