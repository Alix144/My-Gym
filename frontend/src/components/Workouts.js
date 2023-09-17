import Workout from "./Workout";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Workouts = () => {

  const [data, setData] = useState([]);
    
  useEffect(() => {
      // Fetch data from the backend
      axios.get('/body')
        .then(response => {
          setData(response.data); // Update the state with fetched data
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
    
    return ( 
      <div className="workouts">
      {data.length > 0 && data.map((workout) => (
        <Workout key={workout._id} workout={workout} />
      ))}

      </div>
     );
}
 
export default Workouts;