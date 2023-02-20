import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { fetchLoginResults } from '../api';
const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";

const CreateRoutine = (props) => {
      const [ token, setToken, isPublic, setIsPublic, routine, setRoutine ] = props;
      const navigate = useNavigate();
      const createRoutine = async (event) => {
            event.preventDefault();
            const response = await fetch(`${BASE_URL}/api/routines`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                name: routine.name,
                goal: routine.goal,
                isPublic: true
              })
            }) .then(response => response.json())
            .then(result => {
              console.log(result);
              navigate("/routines");
            })
            .catch(console.error);
          }

      return (
            <form className="inputformcontainer" onSubmit={createRoutine}>
                  <div className="inputForm">
                        <input className="inputfield" placeholder="enter new Routine here"
                              onChange={(event) => setRoutine({name: event.target.value})} />
                        <input className="inputfield" placeholder="enter Routine goal here"
                              onChange={(event) => setRoutine({goal: event.target.value})} />
                        <Link to="/routines"><button className="routineButton" onClick={createRoutine}>Create</button></Link>
                  </div>
            </form>
      );
}

export default CreateRoutine;