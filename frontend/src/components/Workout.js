import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Workout = ({workout}) => {



    return ( 
        <div className="workout">
            <h2>{workout.title}</h2>
            <p>load: {workout.load}</p>
            <p>reps: {workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p>
            <button>Delete</button>
        </div>
     );
}
 
export default Workout;