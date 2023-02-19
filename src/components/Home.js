<<<<<<< HEAD
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
=======
import React from "react";

const Home = (props) => {
const accountUsername=props.accountUsername

  return (
    <div>
      <h1>Welcome to Fitness Track.r, thank you for logging in {accountUsername}</h1>
    </div>
  )
}

export default Home;
>>>>>>> fdc32275d2f114acb143d0947ef44234cb6e0ba8
