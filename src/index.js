import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useEffect, useState } from 'react';
// import App from './App';
import {Route, Routes, BrowserRouter, Link, useNavigate} from "react-router-dom"

import {
  Activities,
  Home,
  Login,
  MyRoutines,
  Register,
  Routines,
  CreateActivity
} from "./components"
import { fetchUserData } from './api';



const App = () => {


const [token, setToken] = useState("");
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [activities, setActivities] = useState([]);
const [routines, setRoutines] = useState([]);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

async function fetchUser() {
  const savedToken = localStorage.getItem(token)
  if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
      const userData = await fetchUserData (savedToken);
      console.log(userData);
  };}

useEffect(() => {
  fetchUser();
  }, []);

  return (
      <BrowserRouter>
          <header>
            <Link to='/home'>Home</Link>
            <Link to='/activities'>Activities</Link>
            <Link to='/routines'>Routines</Link>
            {
              isLoggedIn ? <button>Log Out</button> : <div>
                <button><Link to='/login'>Log In</Link></button>
                <button><Link to='/register'>Sign Up</Link></button>
                </div>  
            }
          </header>
        <Routes>
        <Route
            exact
            path="/home"
            element={
              <Home />
            }
          />
        <Route
            exact
            path="/login"
            element={
              <Login 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                token={token}
                setToken={setToken}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            exact
            path="/register"
            element={
              <Register 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                token={token}
                setToken={setToken}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            exact
            path="activities"
            element={
              <Activities
                activities={activities}
                setActivities={setActivities}
                isLoggedIn={isLoggedIn}
              />
            }
          />
           <Route
            exact
            path="routines"
            element={
              <Routines
                activities={activities}
                setActivities={setActivities}
                routines={routines}
                setRoutines={setRoutines}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn = {setIsLoggedIn}
              />
            }/>
           <Route
            exact
            path="/api/activities/:activityid/routines"
            element={
              <Routines
                activities={activities}
                setActivities={setActivities}
                routines={routines}
                setRoutines={setRoutines}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn = {setIsLoggedIn}
              />
            }/>

          {/* <Route exact path="/createactivity">
            <CreateActivity />
          </Route>        */}
          
        </Routes>
      </BrowserRouter>
    );
  };
  


  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
