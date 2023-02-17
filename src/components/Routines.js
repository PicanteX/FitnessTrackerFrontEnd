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
            console.log(result)
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
                        <p>Routine: {routine.name}</p>
                        <p>Goal: {routine.goal}</p>
                        <p>Creator: {routine.creatorId}</p>

                        {routine.activities.map((activity) => {
                             return (
                                <div key={activity.id} id={activity.id}>
                                    <p><b>Activity:</b> <Link to={`/api/activities/${activity.id}/routines`} onClick={(event) => {
                                        event.preventDefault();
                                        const routinesWithActivity = fetchPublicRoutinesByActivity(activity.id)
                                        fetchRoutines(routinesWithActivity)}}>                                      
                                        {activity.name}</Link></p>
                                    <b>Description: {activity.description}</b>
                                    <p>Duration: {activity.duration}</p>
                                    <p>Count: {activity.count}</p></div>
                )})} 
                    </li> )
                })}
            </ul>
    </>)
}

export default Routines;