import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLoginResults } from "../api";

const navigate = useNavigate();

const Login = (props) => {
  const { token, setToken, username, setUsername, password, setPassword} = props;
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const userSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await fetchLoginResults(username, password);
      console.log(result);
      if (result.message === "you're logged in!") {
        localStorage.setItem("user-token", result.token);
        localStorage.setItem("user-username", username);
        setToken(result.token);
        // setIsLoggedIn(true);
        navigate('/home')
        
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div>
      <form id="userQuery" onSubmit={userSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default Login;