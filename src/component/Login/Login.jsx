import "./login.css";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginUser} from "../../redux/apiRequest";
const Login = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("")
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handlelogin = (e) => {
      e.preventDefault();
      const newUser =  {
        username: username,
          password:password,
      };
      loginUser(newUser,dispatch,navigate)
    }
    return (
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handlelogin}>
                <div className="user-box">
                    <input type="text" name="" required=""
                           onChange={(e)=>setUsername(e.target.value)
                    }/>
                        <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" onChange={(e)=>setPassword(e.target.value)}/>
                        <label>Password</label>
                </div>
               <button type={"submit"}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
            </button>
            </form>
        </div>
     );
}
 
export default Login;