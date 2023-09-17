import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

const Signup = () => {
const [username, setUsername] = useState()
const [password, setPassword] = useState()

const navigate = useNavigate()

const handleSubmit= async(e) => {
    e.preventDefault()
    try{
        await axios.post('http://localhost:4000/auth/signup', {username, password});
        alert("Registered Successfully");
        navigate("/login");
    }catch(err){
        console.error(err)
    }
}

    return ( 
            <form className="authen" onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                <div>
                    <label htmlFor="user-reg">Username:</label>
                    <input type="text" id='user-reg' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="pass-reg">Password:</label>
                    <input type="password" id='pass-reg' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <p>Already have an acount?</p>
                    <Link to={"/login"}>Login</Link>
                </div>

                <button type='submit'>Sign up</button>
            </form>
        
     );
}
 
export default Signup;