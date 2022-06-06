import '../App.css';
import React,{ useState,useEffect } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate , Route ,Routes} from 'react-router-dom';
import Axios from 'axios';


function Login(){

    const navigate = useNavigate();

    const [emailAddress, setEmailAddress] = useState("");
    const [passWord, setPassWord] = useState("");
 
    const funcLogin = () =>{
       Axios.post("http://localhost:3001/login",{
          emailAddress: emailAddress,
          password: passWord,
       }).then((response)=>{
          

          if(response.data.message){
              //login failed
              //console.log(response.data.message);
          }else{
              //login successful
              sessionStorage.setItem("isLoggedIn",emailAddress);
              navigate('/dashboard');              
          }

       })
  
    };



      //if you haven't pressed the logout button you go back to the dashboard
        useEffect(() => {
            if(sessionStorage.getItem("isLoggedIn")){
                navigate('/dashboard');
            }
        });


   return(
       
       <div className="login">
           <h1>Login</h1>
           <input type="text" onChange={(e)=>{ setEmailAddress(e.target.value) }} placeholder='email Address..' />
           <input type="password" onChange={(e)=>{ setPassWord(e.target.value) }} placeholder='password..' />
           <button onClick={ funcLogin }>Login</button>
           <Link to="/registration">haven't registered yet?</Link>
       </div>
   );

   
}


export default Login;