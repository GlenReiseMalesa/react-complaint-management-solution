import '../App.css';
import React,{ useState } from 'react';
import {BrowserRouter ,Link,Navigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';


function Dashboard(){


    const loggedOut = ()=>{
        sessionStorage.setItem("isLoggedIn","loggedOut")
    }

   return(
       <div className="dashboard">
          {console.log(sessionStorage.getItem("isLoggedIn"))}
          <button onClick={ loggedOut }>logout</button>
       </div>
   );
}

export default Dashboard;