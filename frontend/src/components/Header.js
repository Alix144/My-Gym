import logo from '../images/muscle.png';
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const toLandingPage = () => {
      if(!isLoggedIn){
        navigate("/")
      }else if(isLoggedIn){
        navigate("/body")
      }
    }

    return ( 
      <header>
        <div className="logo" onClick={toLandingPage}>
          <img src={logo} alt="logo" />
          <h1>MyGYM</h1>
        </div>
     
        <nav>
          
          {isLoggedIn && <Link to={"/login"} onClick={()=>dispatch(authActions.logout())}>Logout</Link>}
          
          {!isLoggedIn && 
          <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Signup</Link>
          </>}
          
        </nav>




      </header>
     );
}
 
export default Header;