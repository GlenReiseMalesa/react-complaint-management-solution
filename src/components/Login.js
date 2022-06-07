import '../App.css';
import React,{ useState,useEffect } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate , Route ,Routes} from 'react-router-dom';
import Axios from 'axios';
import Logo from "./newlogo.svg";

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
       
       <div className="login text-center">
           <main className="form-signin w-100 m-auto">
             <form>
                   <img className="mb-4" src={Logo} alt="" width="80" height="60" />
                   <h1 className="h3 mb-3 fw-normal">Sign In</h1>

                   <div className="form-floating mb-2">
                     <input type="email" className="form-control" id="floatingInput" onChange={(e)=>{ setEmailAddress(e.target.value) }} placeholder='email address..' />
                     <label for="floatingInput">Email address</label>
                   </div>


                   <div className="form-floating mb-2">
                    <input type="password" className="form-control" id="floatingPassword" onChange={(e)=>{ setPassWord(e.target.value) }} placeholder='password..' />
                    <label for="floatingPassword">Password</label>
                   </div>

                    <button className="w-100 btn btn-lg btn-primary" onClick={ funcLogin }>sign in</button>
                    <p className="mt-5 mb-3 text-muted"><Link to="/registration">haven't registered yet?</Link></p>
            </form>
           </main>
       </div>
   );

   
}


export default Login;