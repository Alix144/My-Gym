import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const WorkoutUpdate = () => {
    const [name, setName] = useState("")
    const [load, setLoad] = useState("")
    const [rep, setRep] = useState("")
    const [set, setSet] = useState("");
    const [error, setError] = useState('');

    const id = useParams().id 
    const navigate = useNavigate();   

    const fetchDetails = async() => {
        try {
            const res = await axios.get(`http://localhost:4000/workout/${id}`)
            const data = await res.data;
            return data;
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{ 
        fetchDetails()
        .then((data)=>{
            console.log(data)
            setName(data.workout.name);
            setLoad(data.workout.load);
            setRep(data.workout.rep)
            setSet(data.workout.set)
            setError("")
        })
    },[id])

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!name || load==="" || !rep || !set || name.trim() === ""){
            return setError("Please Fill All The Fields!")
        }

        try {
            const res = await axios.put(`http://localhost:4000/workout/update/${id}`,{
                name,
                load,
                rep,
                set,
            })
            const data = await res.data;
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
            <h3>Edit Workout</h3>
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
                    <button type='submit'>Edit Workout</button>
                    <button onClick={()=>navigate("/body")}>Close</button>
                </div>
            </form>

      </div>
     );
}
 
export default WorkoutUpdate;