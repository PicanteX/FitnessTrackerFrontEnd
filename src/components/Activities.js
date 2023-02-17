import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { newActivity } from "../api";
// import { useSearchParams } from "react-router-dom";
const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

const Activities =(props) => {
    const { activities, setActivities, isLoggedIn } = props;
    // const [searchParams, setSearchParams] = useSearchParams();

    async function fetchActivities () {
        try {
            const response = await fetch(`${BASE_URL}/api/activities`, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            const result = await response.json();
            if (result.error) throw result.error;
            setActivities(result);
        } catch (error) {
            throw error
        }
    };

    let newActivityObj;

    useEffect(() => {
        fetchActivities()
    }, []);

    return (<>
        <h1>Activities List</h1>
        {isLoggedIn ? <form>
            <input 
                placeholder="Activity name"
                onChange={(e) => {
                    newActivityObj.name = e.target.value;
                  }}
            ></input>
            <input 
            placeholder="Activity description"
            onChange={(e) => {
                newActivityObj.description = e.target.value;
              }}
            ></input>
            <button id='createActivityButton' 
                onSubmit={(e) => {
                    e.preventDefault();
                    newActivity(newActivityObj.name, newActivityObj.description)
                    setActivities(...newActivityObj);
                }}>Create Activity</button>
        </form> : null}
            {/* <nav>
                <input type="text" placeholder="search activites here"  ></input>
            </nav> */}
            <ul>{
                activities.map((activity) => {
                    return (<li key={activity.name}>
                        <p>{activity.name}</p>
                        <p>{activity.description}</p>
                    </li> )
                })}
            </ul>
    </>)
}

export default Activities;