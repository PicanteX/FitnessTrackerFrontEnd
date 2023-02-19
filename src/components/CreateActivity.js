import React, { useState } from 'react';
import { Link } from "react-router-dom";
const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

const CreateActivity = (props) => {
      const token = props.token;
      const [description, setDescription] = useState('');
      const [name, setName] = useState('');

      async function createActivity() {
            try {

                  const response = await fetch(`${BASE_URL}/activities`, {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                              "Authorization": `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                              name: name,
                              description: description
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
                  setDescription('');
                  event.preventDefault();
            }}>
                  <div className="inputForm">
                        <input className="inputfield" placeholder='enter new activity here'
                              onChange={(event) => setName(event.target.value)} />
                        <input className="inputfield" placeholder='enter activity description here'
                              onChange={(event) => setDescription(event.target.value)} />

                        <Link to="/activities"><button className="activitybutton" onClick={createActivity}>Create</button></Link>
                  </div>
            </form>
      );
}

export default CreateActivity;