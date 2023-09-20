import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import {authActions} from '../store/index';


const Login = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!userName && !password){
            return setError("Please Fill In All The Fields!")
        }else if(!userName){
            return setError("Username Field is Empty!")
        }else if(!password){
            return setError("Password Field is Empty!")
        }

        try {
            const res = await axios.post("https://my-gym-api.vercel.app/user/login", {
                userName,
                password
            })

            const data = await res.data
            
            localStorage.setItem("userId", data.user._id)
            dispatch(authActions.login())
            navigate("/body")

        } catch (err) {
            console.log(err.response.data.message)
            setError(err.response.data.message)
        }

    }

    return ( 
        <form className="authen" onSubmit={handleSubmit}>
            <h1>Log in</h1>
            <div>
                <label htmlFor="user-sign">Username:</label>
                <input type="text" id='user-sign' value={userName} onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="pass-sign">Password:</label>
                <input type="password" id='pass-sign' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

{error && <p style={{color: "#ff5e71"}}>{error}</p>}

            <div>
                <p>Don't have an acount?</p>
                <Link to={"/signup"} >Signup</Link>
            </div>

            <button type='submit'>Log in</button>
        </form>
     );
}
 
export default Login;