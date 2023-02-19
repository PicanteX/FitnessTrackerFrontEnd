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