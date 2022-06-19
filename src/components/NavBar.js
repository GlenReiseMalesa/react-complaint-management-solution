import '../App.css';
import React,{ useState,useEffect } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';


function NavBar(props){

    const navigate = useNavigate();
    const loggedOut = ()=>{
        sessionStorage.removeItem("isLoggedIn");
        navigate('/');
     }
  
let role = props.role;

if(role.includes("Student") && !role.includes("Admin")){
    return(          
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 link-secondary">VM-Complaints</a></li>
            </ul>

            <div className="col-md-3 text-end">
                <button type="button" onClick={loggedOut} className="btn btn-outline-primary me-2">Logout</button>
            </div>
            </header>
        </div>
    );
}

if(role.includes("Admin") && !role.includes("Student")){
    return(          
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 link-secondary">VM-Complaints</a></li>
                <li><Link className="nav-link px-2 link-dark" to="/registration">New-Issues</Link></li>
                <li><Link className="nav-link px-2 link-dark" to="/registration">Completed-Issues</Link></li>
                <li><Link className="nav-link px-2 link-dark" to="/registration">Pending-Issues</Link></li>
            </ul>

            <div className="col-md-3 text-end">
                <button type="button" onClick={loggedOut} className="btn btn-outline-primary me-2">Logout</button>
            </div>
            </header>
        </div>
    );
}

if(role.includes("Student")&&role.includes("Admin")){

    return(          
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 link-secondary">VM-Complaints</a></li>
                <li><Link className="nav-link px-2 link-dark" to="/registration">Create-Issue</Link></li>
                <li><Link className="nav-link px-2 link-dark" to="/registration">New-Issues</Link></li>
                <li><Link className="nav-link px-2 link-dark" to="/registration">Completed-Issues</Link></li>
                <li><Link className="nav-link px-2 link-dark" to="/registration">Pending-Issues</Link></li>
            </ul>

            <div className="col-md-3 text-end">
                <button type="button" onClick={loggedOut} className="btn btn-outline-primary me-2">Logout</button>
            </div>
            </header>
        </div>
    );
}



}

export default NavBar;