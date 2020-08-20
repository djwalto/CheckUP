import React from 'react';
import { useSpring, animated } from 'react-spring';
import UserPage from '../UserPage/UserPage';





const UserPageEffect = () => {

  const fade = useSpring({

    from: {
      opacity: 0
    },

    opacity: 1
  });




  return (
    <animated.div style={fade}>
      <UserPage />
    </animated.div>
  );
}
export default UserPageEffect;
