import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { useDispatch } from "react-redux";
import {authActions} from '../store/index';

const Signup = () => {
    const dispatch = useDispatch();
const [userName, setUsername] = useState()
const [password, setPassword] = useState()

const navigate = useNavigate()

const sendRequest = async() => {
    const res = await axios.post("http://localhost:4000/user/signup", {
        userName,
        password
    }).catch(err=>console.log(err))

    const data = await res.data;
    return data;
}

const handleSubmit = (e) => {
    e.preventDefault()
    sendRequest().then((data)=>localStorage.setItem("userId", data.user._id)).then(()=>dispatch(authActions.login())).then(()=> navigate("/body")).then(data=> console.log(data))
}

    return ( 
            <form className="authen" onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                <div>
                    <label htmlFor="user-reg">Username:</label>
                    <input type="text" id='user-reg' value={userName} onChange={(e) => setUsername(e.target.value)}/>
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