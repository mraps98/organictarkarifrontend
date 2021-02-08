import "./Login.css";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import backendurl from "../config/config";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newRepeatPassword, setNewRepeatPassword] = useState("");
    const [isNewUser, setIsNewUser] = useState(false);
    const history = useHistory();
    const register = () => {
        if(newPassword != newRepeatPassword){
            alert("passwords don't match");
            return;
        }else{
            const data = {
                firstName: firstName,
                lastName: lastName,
                email: newEmail,
                password: newPassword,
                role: "user"
            };
            fetch(`${backendurl}/users/`, {
                method: "POST",
                mode: "cors",
                headers:{
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                history.push("/");
            })
            .catch(err=>console.log(err));
        }
    }
    return(
        <div className="login">
            <div className="login__tabs">
                <div className={"login__tab " + (isNewUser===false? "login__tab--active":"")}  onClick={()=>setIsNewUser(false)}>LOGIN</div>
                <div className={"login__tab " + (isNewUser==true? "login__tab--active":"")} onClick={()=>setIsNewUser(true)}>REGISTER</div>
            </div>
            {isNewUser===false?(
                <div className="login__box">
                    <div className="login__row">
                        <label>Email:</label>
                        <input type ='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="login__row">
                        <label>Password:</label>
                        <input type ='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="login__row">
                        <button disabled={!(email&&password)}>Login</button>
                    </div>
                </div>
                ):
                (
                    <div className="register">
                        <div className="login__box">
                            <div className="login__row">
                                <label>First Name:</label>
                                <input type ='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                            </div>
                            <div className="login__row">
                                <label>Last Name:</label>
                                <input type ='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                            </div>
                            <div className="login__row">
                                <label>Email:</label>
                                <input type ='text' value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}/>
                            </div>
                            <div className="login__row">
                                <label>Password:</label>
                                <input type ='password' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
                            </div>
                            <div className="login__row">
                                <label>Repeat password:</label>
                                <input type ='password' value={newRepeatPassword} onChange={(e)=>setNewRepeatPassword(e.target.value)}/>
                            </div>
                            <div className="login__row">
                                <button disabled={!(firstName&&lastName&&newEmail&&newPassword&&newRepeatPassword)} onClick={()=>register()}>Register</button>
                            </div>
                        </div>
                    </div>
                )
            }
           
        </div>
    )
}
export default Login;