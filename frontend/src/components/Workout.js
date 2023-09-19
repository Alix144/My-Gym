import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Workout = ({id, name, load, rep, set}) => {



    return ( 
        <div className="workout">
            <h2>{name}</h2>
            <p>Load: {load} kg</p>
            <p>Reps: {rep}</p>
            <p>Sets: {set}</p>
            {/* <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p> */}
            <button>Delete</button>
        </div>
     );
}
 
export default Workout;