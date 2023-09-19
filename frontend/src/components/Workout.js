import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Workout = ({id, name, load, rep, set}) => {

    const navigate = useNavigate();  

    const handleDelete = async() => {

        try {
            const res = axios.delete(`http://localhost:4000/workout/${id}`)
            const data = await res.data;
            console.log(data)
            window.location.reload();
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
            {/* <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p> */}
            <button onClick={handleDelete}>Delete</button>
            <button id='updateBtn' onClick={()=>navigate(`/update/${id}`)}>Edit</button>
            
        </div>
     );
}
 
export default Workout;