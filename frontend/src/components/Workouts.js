import Workout from "./Workout";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Workouts = () => {

  const [data, setData] = useState([]);

    
    return ( 
      <div className="workouts">
      {data.length > 0 && data.map((workout) => (
        <Workout key={workout._id} workout={workout} />
      ))}

      </div>
     );
}
 
export default Workouts;