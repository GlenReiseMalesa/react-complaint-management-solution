import '../App.css';
import React,{ useState,useEffect } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';
import NavBar from './NavBar';
import Logo from "./newlogo.svg";

function createMyComplaint(props){

   return(
       <div className="createMyComplaint text-center">
            <div className="container mt-5">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-dark">Describe Your Maintanance Issue</a></li>
                </ul>
                </header>
            </div>   
          <main className="form-signin w-100 m-auto">
             <form>
                   <div className="form-floating mb-2">
                     <textarea className="form-control" style={{height: "150px"}} placeholder="describe your maintanance issue.." id="floatingTextarea2"></textarea>
                     <label for="floatingInput">Complaint</label>
                   </div>
                   <button className="w-100 btn btn-lg btn-primary" >submit</button>
            </form>
           </main>

       </div>
   );

}

export default createMyComplaint;