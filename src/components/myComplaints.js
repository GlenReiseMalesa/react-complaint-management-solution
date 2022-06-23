import '../App.css';
import React,{ useState,useEffect } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';
import NavBar from './NavBar';
import Logo from "./newlogo.svg";
import { data } from 'jquery';

function MyComplaints(props){


    useEffect(() => {   
        //get a user's complaints
            Axios.post("http://localhost:3001/getMyComplaints",{
                emailAddress: props.email,
            }).then((response)=>{

                if(response.data.message){
                }else{
                 //get the data                    
         


                }

            });


    });

   return(
       <div className="myComplaints">
       
          <h1>Heii</h1>
       </div>
   );

}

export default MyComplaints;