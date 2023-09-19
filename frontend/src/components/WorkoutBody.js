import { useNavigate } from 'react-router-dom';

const WorkoutBody = () => {

    const navigate = useNavigate();   

    return ( 
        <div className="workouts-body">
            <button onClick={()=>{navigate("/add")}} >New Workout</button>
        </div>
     );
}
 
export default WorkoutBody;