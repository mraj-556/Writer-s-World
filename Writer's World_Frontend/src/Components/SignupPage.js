import './Components.css'
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { VscAccount } from "react-icons/vsc";
import { RiLockPasswordFill } from "react-icons/ri";
import { CiCircleCheck } from "react-icons/ci";
import { CiWarning } from "react-icons/ci";


function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [email, setEmail] = useState('');
    const [sec_qn, setSec_qn] = useState('');
    const [sec_ans, setSec_ans] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async () => {
        console.log("Sign UP function");
        try {
          const response = await axios.post('http://localhost:5000/signup', {
            username: username,
            password: password,
            password1: password1,
            email: email,
            security_qn: sec_qn,
            security_ans: sec_ans,
          });
          const recvd_data = response.data;
          if (recvd_data['auth']==="Allow"){
            navigate('/login');
          }
          else{
            setError(`Sign UP failed : ${recvd_data['msg']}`);
          }

        } catch (error) {
          setError(`Sign UP error : ${error}`);
          console.error('Sign UP failed : ', error);
        }
      };
    
  return (
    <div className="App-content">
      <div className='App-content-content'>
        <div>Writer's &nbsp; World</div>
        
        <div className="signup-form">
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="basic-addon1"><VscAccount size={20} color="whitesmoke" style={{ borderRadius: '50%'}}/></span>
                <input type="text" name="username" className="form-control signup-inp" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" autoFocus autoComplete='off' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <br/>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill size={20} color="whitesmoke" style={{ borderRadius: '50%' }}/></span>
                <input type="password" name="password" className="form-control signup-inp" placeholder="Password" aria-label="password" aria-describedby="addon-wrapping" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br/>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="basic-addon1"><CiCircleCheck size={20} color="whitesmoke" style={{ borderRadius: '50%' }}/></span>
                <input type="password" name="password1" className="form-control signup-inp" placeholder="Verify Password" aria-label="password1" aria-describedby="addon-wrapping" autoComplete='off' value={password1} onChange={(e) => setPassword1(e.target.value)}/>
            </div>
            <br/>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="basic-addon1"><CiCircleCheck size={20} color="whitesmoke" style={{ borderRadius: '50%' }}/></span>
                <input type="email" name="email" className="form-control signup-inp" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <br/>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="basic-addon1"><CiCircleCheck size={20} color="whitesmoke" style={{ borderRadius: '50%' }}/></span>
                <input type="text" name="security_qn" className="form-control signup-inp" placeholder="security qn" aria-label="security_qn" aria-describedby="addon-wrapping" autoComplete='off' value={sec_qn} onChange={(e) => setSec_qn(e.target.value)}/>
            </div>
            <br/>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="basic-addon1"><CiCircleCheck size={20} color="whitesmoke" style={{ borderRadius: '50%' }}/></span>
                <input type="text" name="security_ans" className="form-control signup-inp" placeholder="security ans" aria-label="security_ans" aria-describedby="addon-wrapping" autoComplete='off' value={sec_ans} onChange={(e) => setSec_ans(e.target.value)}/>
            </div>
            
            <br/>
            {error && <div className='err-msg' style={{ color: 'red' }}>{error} &nbsp; <CiWarning size={20} style={{ borderRadius: '50%' , boxShadow: '0 0 10px 5px red' }}/></div>}
            <button type="submit" className="btn btn-primary mb-3" onClick={handleSignup}>Sign UP</button>
            
        </div>

      </div>
    </div>
  )
}

export default LoginPage