import '../App.css';
import React,{ useState } from 'react';
import {BrowserRouter ,Link,Navigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';


function Register(){

   const [userName, setUserName] = useState("");
   const [passWord, setPassWord] = useState("");

   const funcRegister = () =>{
      Axios.post("http://localhost:3001/register",{
         username: userName,
         password: passWord,
      }).then((response)=>{
         console.log(response);
      })
   };

   return(
       <div className="register">
           <h1>Register</h1>
           <input type="text" onChange={(e)=>{ setUserName(e.target.value) }} placeholder='username..' />
           <input type="password" onChange={(e)=>{ setPassWord(e.target.value) }} placeholder='password..' />
           <button onClick={ funcRegister }>Register</button>
           <Link to="/">have an account?</Link>
       </div>
   );
}

export default Register;