import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
export const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const fetchActivities = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/activities`);
            const result = await response.json();
            if (result.error) throw result.error;
            setActivities(result);
        } catch (error) {
            throw error
        };
    };
    
    useEffect(fetchActivities, []);
}

return <>
    <h1>Activites List</h1>
        <nav>
            <input type="text" placeholder="search activites here" value= </input>
        </nav>
</>
export default Activities;