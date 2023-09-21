import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Workout = ({id, name, load, rep, set, date}) => {

    const navigate = useNavigate();  

    const handleDelete = async() => {

        try {
            const res = axios.delete(`https://mern-my-gym-api.onrender.com/workout/${id}`).then(()=>window.location.reload())
            const data = await res.data;
            console.log(data)
            
        } catch (err) {
            console.log(err)
        }
    }

    return ( 
        <div className="workout">
            <h2>{name}</h2>
            <p>Load: {load} kg</p>
            <p>Reps: {rep}</p>
            <p>Sets: {set}</p>
            <button onClick={handleDelete}>Delete</button>
            <button id='updateBtn' onClick={()=>navigate(`/update/${id}`)}>Edit</button>
            
        </div>
     );
}
 
export default Workout;