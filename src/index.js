import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useEffect, useState } from 'react';
// import App from './App';
import {Route, Routes, BrowserRouter} from "react-router-dom"

import {
  Activities,
  Home,
  Login,
  MyRoutines,
  Register,
  Routines,
} from "./components"
import { fetchUserData } from './api';

const App = () => {




const [token, setToken] = useState("");
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [activities, setActivities] = useState([]);
const [routines, setRoutines] = useState([]);

useEffect(() => {
  fetchUser();
  }, []);

  async function fetchUser() {
    const savedToken = localStorage.getItem(token)
    if (savedToken) {
        setToken(savedToken);
        setIsLoggedIn(true);
        const userData = await fetchUserData (savedToken);
        console.log(userData);
    };}

  return (
      <BrowserRouter>
        <Routes>
        <Route
            exact
            path="/"
            element={
              <Home />
            }
          />
          <Route
            exact
            path="/api/activities"
            element={
              <Activities
                activities={activities}
                setActivities={setActivities}
              />
            }
          />
           <Route
            exact
            path="/api/routines"
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
            }
          />         
          
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
