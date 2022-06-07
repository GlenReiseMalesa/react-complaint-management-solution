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
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">


                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" onClick={loggedOut} className="btn btn-outline-primary me-2">Logout</button>
                </div>
                </header>
            </div>

            <div className="b-example-divider"></div>
       </div>
   );
}

export default Dashboard;