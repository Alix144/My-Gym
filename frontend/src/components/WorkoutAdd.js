import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WorkoutAdd = () => {
    const [name, setName] = useState("")
    const [load, setLoad] = useState("0")
    const [rep, setRep] = useState("1")
    const [set, setSet] = useState("1");
    const [error, setError] = useState('');
    const navigate = useNavigate();   


    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!name || !load || !rep || !set || name.trim() === ""){
            return setError("Please Fill All In The Fields!")
        }

        try {
            const res = await axios.post("https://my-gym-api.vercel.app/workout/add", {
                name,
                load,
                rep,
                set,
                user: localStorage.getItem('userId'),
            })
            const data = await res.data;
            console.log(data)
            navigate("/body")
            return data;
        } catch (err) {
            console.log(err)
            setError("There Was an Error!")
        }
    }

    return ( 
        <div className="workouts-body">


         <form className="workout-form" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
                <div>
                    <label htmlFor="">Excersize Title:</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
    
                <div>
                    <label htmlFor="">Load(kg):</label>
                    <input type="number" min={0} value={load} onChange={(e)=>{setLoad(e.target.value)}}/>
                </div>
    
                <div>
                    <label htmlFor="">Reps:</label>
                    <input type="number" min={1} value={rep} onChange={(e)=>{setRep(e.target.value)}}/>
                </div>

                <div>
                    <label htmlFor="">Sets:</label>
                    <input type="number" min={1} value={set} onChange={(e)=>{setSet(e.target.value)}}/>
                </div>

                {error && <p style={{color: "#ff5e71"}}>{error}</p>}

                <div>
                    <button type='submit'>Add Workout</button>
                    <button onClick={()=>{navigate("/body")}}>Close</button>
                </div>
            </form>

      </div>
     );
}
 
export default WorkoutAdd;