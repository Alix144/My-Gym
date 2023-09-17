import logo from '../images/muscle.png';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios'

const Header = () => {

    const navigate = useNavigate()

    return ( 
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Ma GYM</h1>
        </div>
     
        <nav>
          <>
          <Link to={"/"}>Logout</Link>
          </>
          
          <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Signup</Link>
          </>
          
        </nav>




      </header>
     );
}
 
export default Header;