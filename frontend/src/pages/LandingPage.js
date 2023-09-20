import { useNavigate } from 'react-router-dom';
import workout from '../images/workout.png';

const LandingPage = () => {

    const navigate = useNavigate()

    return ( 
        <>
        <div className="landing-page">
            <h1>Track Your Progress, Crush Your Goals!</h1>
            <img src={workout} alt="" />
        </div>
        <div className="btn-div">
            <button className="landingPage-btn" onClick={()=>navigate("/login")} >Login</button>
        </div>
        </>
     );
}
 
export default LandingPage;