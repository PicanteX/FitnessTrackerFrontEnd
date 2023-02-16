import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  Activities,
  Home,
  Login,
  MyRoutines,
  Register,
  Routines,
} from "./Components"



const [token, setToken] = useState("");
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(async () => {
    const savedToken = localStorage.getItem(token)
    if (savedToken) {
        setToken(savedToken);
        setIsLoggedIn(true);
        const userData = await fetchUserData (savedToken);
    };
  }, []);



  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
