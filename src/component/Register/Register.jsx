import "./register.css";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerUser} from "../../redux/apiRequest";
const Register = () => {
    const [username,setUsername]=useState("");
    const [password,setPassWord]=useState("");
    const [email,setEmail]=useState("");
    const [roles,setRole]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleregister = (e) => {
      e.preventDefault()
        const newUser={
            username: username,
            password: password,
            email: email,
            roles: [roles]
        };
      registerUser(newUser,dispatch,navigate)
    }


   return (
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleregister}>
                <div className="user-box">
                    <input type="text" name="username" required="" onChange={(e)=>setUsername(e.target.value)}/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="password" required=""
                    onChange={(e)=>setPassWord(e.target.value)}/>
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input type="email" name="email" required=""
                    onChange={(e)=>setEmail(e.target.value)}/>
                    <label>email</label>
                </div>
                <div className="user-box">
                    <select name={"roles"} onChange={(e)=>setRole(e.target.value)}>
                        <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                        <option value="ROLE_USER">ROLE_USER</option>
                        <option value="ROLE_CUSTOMER">ROLE_CUSTOMER</option>
                    </select>
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
 
export default Register;