import React from 'react';

import Posts from './Posts';
const Home = () => {
  return (
    <div>
    
      <h2
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: '30px',
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}
      >
        Welcome to Fitness Tracker
      </h2>
      <Posts />
    </div>
  );
};
export default Home;
