import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import { useDispatch } from "react-redux";
import {authActions} from '../store/index';


const Login = () => {
    const dispatch = useDispatch();

    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const sendRequest = async() => {
        const res = await axios.post("http://localhost:4000/user/login", {
            userName,
            password
        }).catch(err=>console.log(err))

        const data = await res.data
        return data;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendRequest().then((data)=>localStorage.setItem("userId", data.user._id)).then(()=>dispatch(authActions.login())).then(()=>navigate("/blogs")).then((data) => console.log(data))
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

            <div>
                <p>Don't have an acount?</p>
                <Link to={"/signup"}>Signup</Link>
            </div>

            <button type='submit'>Log in</button>
        </form>
     );
}
 
export default Login;