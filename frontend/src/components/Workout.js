import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import axios from 'axios';

const Workout = ({id, name, load, rep, set}) => {

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

    const handleEdit = () => {

    }

    return ( 
        <div className="workout">
            <h2>{name}</h2>
            <p>Load: {load} kg</p>
            <p>Reps: {rep}</p>
            <p>Sets: {set}</p>
            {/* <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p> */}
            <button onClick={handleDelete}>Delete</button>

        </div>
     );
}
 
export default Workout;