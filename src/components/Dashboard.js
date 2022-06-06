import '../App.css';
import React,{ useState,useEffect } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';


function Dashboard(){

    //if you haven't logged in you get redirected to the login page
    const navigate = useNavigate();
    useEffect(() => {   
            if(!sessionStorage.getItem("isLoggedIn")){
                navigate('/');
            }
    });


    const loggedOut = ()=>{
       sessionStorage.removeItem("isLoggedIn");
       navigate('/');
    }



   return(
       <div className="dashboard">
          {console.log(sessionStorage.getItem("isLoggedIn"))}
          <button onClick={ loggedOut }>logout</button>
       </div>
   );
}

export default Dashboard;