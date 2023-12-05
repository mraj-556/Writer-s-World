import './Components.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { VscAccount } from "react-icons/vsc";
import { RiLockPasswordFill } from "react-icons/ri";
import { CiWarning } from "react-icons/ci";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Login function");
    try {
      const response = await axios.post('http://localhost:5000/userpage', {
        username: username,
        password: password,
      });
      const recvd_data = response.data;
      if (recvd_data==="Allow"){
        navigate('/profile');
      }
      else{
        setError('Login failed. Please check your credentials.');
      }

    } catch (error) {
      console.error('Login failed:', error);
    }
  };





  return (
    <div className="App-header" style={{backgroundColor:"black"}}>
        <div>Writer's &nbsp; World</div>

        <div className="login-form">
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="basic-addon1"><VscAccount size={20} color="cyan" style={{ borderRadius: '50%' , boxShadow: '0 0 10px 5px cyan' }}/></span>
                <input type="text" name="username" className="form-control login-inp" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" autoFocus autoComplete='off' required value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <br/>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill size={20} color="cyan" style={{ borderRadius: '50%' , boxShadow: '0 0 10px 5px cyan' }}/></span>
                <input type="password" name="password" className="form-control login-inp" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" autoComplete='off' required value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary mb-3" onClick={handleLogin}>Login</button>
            {error && <div className='err-msg' style={{ color: 'red' }}>{error} &nbsp; <CiWarning size={20} style={{ borderRadius: '50%' , boxShadow: '0 0 10px 5px red' }}/></div>}
            <hr style={{backgroundColor:"white"}}/>
            <Link to="/signup">
              <button type="submit" className="btn btn-primary mb-3">New ? Sign UP</button> 
            </Link>
        </div>
    </div>
  )
}

export default LoginPage