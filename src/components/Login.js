import '../App.css';
import React,{ useState } from 'react';
import {BrowserRouter ,Link,Navigate , Route ,Routes} from 'react-router-dom';
import Axios from 'axios';


function Login(){


    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
 
    const funcLogin = () =>{
       Axios.post("http://localhost:3001/login",{
          username: userName,
          password: passWord,
       }).then((response)=>{
          

          if(response.data.message){
              //login failed
              console.log(response.data.message);
          }else{
              //login successful
              console.log(response.data[0].username);
              
          }

       })
    };

   return(
       <div className="login">
           <h1>Login</h1>
           <input type="text" onChange={(e)=>{ setUserName(e.target.value) }} placeholder='username..' />
           <input type="password" onChange={(e)=>{ setPassWord(e.target.value) }} placeholder='password..' />
           <button onClick={ funcLogin }>Login</button>
           <Link to="/registration">haven't registered yet?</Link>
       </div>
   );
}

export default Login;