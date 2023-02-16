import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

const Routines =(props) => {
    const { routines, setRoutines } = props;

    async function fetchRoutines () {
        try {
            const response = await fetch(`${BASE_URL}/api/routines`, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            const result = await response.json();
            if (result.error) throw result.error;
            setRoutines(result);
        } catch (error) {
            throw error
        }
    };
    
    useEffect(() => {
        fetchRoutines()
    }, []);

    const fetchPublicRoutinesByActivity = async (activityId) => {
        try {
          await fetch(`${BASE_URL}/api/activities/${activityId}/routines`, {
            headers: {
              "Content-Type": "application/json",
            },
          }) .then(response => response.json())
          .then(result => {
            return result;
          })
        } catch (error) {
          throw error;
        };
      };

    return (<>
        <h1>Routines List</h1>
            <ul>{
                routines.map((routine) => {
                    return (<li key={routine.name}>
                        <p>{routine.name}</p>
                        <p>{routine.goal}</p>
                        <p>{routine.creatorId}</p>

                        {routine.activities.map((activity) => {
                             return (
                                <div key={activity.id}>
                                    <p>Activity: </p>
                                            const routinesWithActivity = fetchPublicRoutinesByActivity(activity.id)
                                            fetchRoutines(routinesWithActivity);
                                        }
                </li> )
                })} 
                    </li> )
                })}
            </ul>
    </>)
}

export default Routines;