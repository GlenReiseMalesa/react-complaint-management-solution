import '../App.css';
import React,{ useState,useEffect } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';
import NavBar from './NavBar';
import Logo from "./newlogo.svg";

function completedStudentComplaints(props){

   return(
       <div className="completedStudentComplaints">

       </div>
   );

}

export default completedStudentComplaints;