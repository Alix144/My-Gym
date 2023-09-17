import React, { useState } from 'react';
import axios from 'axios';


const WorkoutBody = () => {

    const [isFormVisible, setFormVisible] = useState(false);
    const [data, setData] = useState("");

    const toggleForm = () => {
        setFormVisible(!isFormVisible);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/', data);
          
          setData({ name: '' }); // Clear form fields
        } catch (error) {
          console.error('Error creating data:', error);
        }
      };

    return ( 
        <div className="workouts-body">
        <button onClick={toggleForm} >New Workout</button>

        {isFormVisible && (<form className="workout-form" onSubmit={handleSubmit} >
            <h3>Add a New Workout</h3>
                <div>
                    <label htmlFor="">Excersize Title:</label>
                    <input type="text"  />
                </div>
    
                <div>
                    <label htmlFor="">Load(kg):</label>
                    <input type="number" />
                </div>
    
                <div>
                    <label htmlFor="">Reps:</label>
                    <input type="number" />
                </div>
    
                <div>
                    <button>Add Workout</button>
                    <button onClick={toggleForm}>Close</button>
                </div>
            </form>)}

      </div>
     );
}
 
export default WorkoutBody;