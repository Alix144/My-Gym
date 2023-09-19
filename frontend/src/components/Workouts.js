import Workout from "./Workout";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Workouts = () => {

  const [user, setUser] = useState()
  const [error, setError] = useState()

  const id = localStorage.getItem("userId");

  const sendRequest = async() => {

    try {
      const res = await axios.get(`http://localhost:4000/workout/user/${id}`).catch(err=>console.log(err))
      const data = await res.data;
      return data;

    } catch (err) {
      console.log(err)
      setError("There was an error connecting to the Database!")
    }
  }

  useEffect(() => {
      sendRequest().then(data=>setUser(data.user))
  },[])
    
    return ( 
      <div className="workouts">
      {user && user.workout && user.workout.slice().reverse().map((workout, index) => (
      <Workout key={index} id={workout._id} name={workout.name} load={workout.load} rep={workout.rep} set={workout.set} />
      ))}

      {error && <p style={{color: "#ff5e71"}}>{error}</p>}
      
      </div>
     );
}
 
export default Workouts;