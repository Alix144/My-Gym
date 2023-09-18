import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import {authActions} from '../store/index';

const Signup = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!userName && !password){
            return setError("Please Fill All The Fields!")
        }else if(!userName){
            return setError("Username Field is Empty!")
        }else if(!password){
            return setError("Password Field is Empty!")
        }

        try {
            const res = await axios.post("http://localhost:4000/user/signup", {
                userName,
                password
            })

            const data = await res.data;

            localStorage.setItem("userId", data.user._id)
            dispatch(authActions.login())
            navigate("/body")

        } catch (err) {
            setError(err.response.data.message)   
        }


        console.log(error)
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

                    {error && <p style={{color: "#ff5e71"}}>{error}</p>}

                    <div>
                        <p>Already have an acount?</p>
                        <Link to={"/login"}>Login</Link>
                    </div>

                    <button type='submit'>Sign up</button>
                </form>

         );
    }
    
export default Signup;