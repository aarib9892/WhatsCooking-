import React,{useState} from 'react';
import "./Admin.css"
import AdminDetails from './AdminDetails'
import { Route, Switch,Redirect } from "react-router-dom";

function Admin() {
    
    const valid="admin22"
    const pass="12345"
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [flag, setflag] = useState(false);
   
    const submitHandler=()=>{
        if(username===valid){
            alert("Success")
            setflag(true)
        }else{
        alert("Invalid Crediantials")
        }
    }

    return (
        <div className='parent'>
            <div className="content-admin">
            <h1>Admin Credentials:</h1>
                <div className='input-box'>
                    <span className='details'>Username:  </span>
                    <input type="text" name='name' className='input-text' onChange={(e) => { setUsername(e.target.value) }} required="required" />
                </div>

                <div className='input-box'>
                    <span className='details'>Password:  </span>
                    <input type="password" name='name' className='input-text' onChange={(e) => { setPassword(e.target.value) }} required="required" />
                </div>
                <button className='btn' onClick={submitHandler}>Validate</button>
                
                {flag==true && <Redirect to="/admin-Details" />}

            </div>
        </div>
    )
}

export default Admin