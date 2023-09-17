import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'



const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    return ( 
        <form className="authen" >
            <h1>Log in</h1>
            <div>
                <label htmlFor="user-sign">Username:</label>
                <input type="text" id='user-sign' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="pass-sign">Password:</label>
                <input type="password" id='pass-sign' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div>
                <p>Don't have an acount?</p>
                <Link to={"/signup"}>Signup</Link>
            </div>

            <button type='submit'>Log in</button>
        </form>
     );
}
 
export default Login;