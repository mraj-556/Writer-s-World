import './Components.css'
import { VscAccount } from "react-icons/vsc";
import { RiLockPasswordFill } from "react-icons/ri";
import { CiCircleCheck } from "react-icons/ci";

function LoginPage() {
  return (
    <div className="App-header" style={{backgroundColor:"black"}}>
        <div>Writer's &nbsp; World</div>

        <div className="login-form">
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="basic-addon1"><VscAccount size={20} color="cyan" style={{ borderRadius: '50%' , boxShadow: '0 0 10px 5px cyan' }}/></span>
                <input type="text" name="username" className="form-control login-inp" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" autoFocus autoComplete='off'/>
            </div>
            <br/>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="basic-addon1"><RiLockPasswordFill size={20} color="cyan" style={{ borderRadius: '50%' , boxShadow: '0 0 10px 5px cyan' }}/></span>
                <input type="text" name="password" className="form-control login-inp" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" autoComplete='off'/>
            </div>
            <br/>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="basic-addon1"><CiCircleCheck size={20} color="cyan" style={{ borderRadius: '50%' , boxShadow: '0 0 10px 5px cyan' }}/></span>
                <input type="text" name="password" className="form-control login-inp" placeholder="Verify Password" aria-label="Username" aria-describedby="addon-wrapping" autoComplete='off'/>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary mb-3">Sign UP</button>
            
        </div>
    </div>
  )
}

export default LoginPage