import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

const CreateRoutine = (props) => {
      const [ token, setToken, isPublic, setIsPublic, name, setName, goal , setGoal ] = props;

      async function createRoutine() {
            try {

                  const response = await fetch(`${BASE_URL}/api/routines`, {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                              "Authorization": `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                              name: name,
                              goal: goal,
                              isPublic: isPublic
                        }),
                  }
                  );

                  const resultError = await response.json();
                  if (resultError.error) {
                        alert(resultError.error);
                  }
            } catch (error) {
                  console.error(error);
            }
      }

      return (
            <form className="inputformcontainer" onSubmit={(event) => {
                  setName('');
                  setGoal('');
                  event.preventDefault();
            }}>
                  <div className="inputForm">
                        <input className="inputfield" placeholder="enter new Routine here"
                              onChange={(event) => setName(event.target.value)} />
                        <input className="inputfield" placeholder="enter Routine goal here"
                              onChange={(event) => setGoal(event.target.value)} />
                  </div>
            </form>
      );
}

export default CreateRoutine;