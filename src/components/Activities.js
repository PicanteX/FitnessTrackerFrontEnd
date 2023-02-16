import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
// import { useSearchParams } from "react-router-dom";
const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

const Activities =(props) => {
    const { activities, setActivities } = props;
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
    
    useEffect(() => {
        fetchActivities()
    }, []);

    return (<>
        <h1>Activities List</h1>
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