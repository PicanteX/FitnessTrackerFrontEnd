import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

const MyRoutines = (props) => {
    const { routines, setRoutines, token, setToken, loggedIn, isLoggedIn, userName } = props;
    async function fetchMyRoutines() {
        try {
              const response = await fetch(
                    `${BASE_URL}/users/${userName}/routines`, {
                    headers: {
                          'Content-Type': 'application/json',
                          'Authorization': `Bearer ${token}`
                    },
              });

              const result = await response.json();
              setRoutines(result);
              console.log(result);

        } catch (error) {
              console.error(error);
        }
  };

  useEffect(() => {
    fetchMyRoutines();
}, []);


}

export default MyRoutines;