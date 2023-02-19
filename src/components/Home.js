import React from 'react';

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

// import React from "react";

// const Home = (props) => {
// const accountUsername=props.accountUsername

//   return (
//     <div>
//       <h1>Welcome to Fitness Track.r, thank you for logging in {accountUsername}</h1>
//     </div>
//   )
// }

// export default Home;
