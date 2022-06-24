import '../App.css';
import React,{ useState,useEffect } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';
import NavBar from './NavBar';
import Logo from "./newlogo.svg";
import { data } from 'jquery';

function MyComplaints(props){

   const [complaints,setComplaints] = useState([]);
 
    useEffect(() => {   
        //get a user's complaints
            Axios.post("http://localhost:3001/getMyComplaints",{
                emailAddress: props.email,
            }).then((response)=>{
             
                    if(response.data.message){
                    }else{
                    //get the data                         
                      setComplaints(response.data);             
                    }
                

            },[2]);


    });

   return(
       <div className="myComplaints">
         {
           complaints.map((c) => {
            return <h1>{c.description}</h1>
           })
         }
       </div>
   );

}

export default MyComplaints;