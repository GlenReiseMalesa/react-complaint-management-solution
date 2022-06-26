
import React,{ useState,useEffect,useRef } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate,useLocation, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';



function Update(props){ 


    const location = useLocation();
    const navigate = useNavigate();

    const data = location.state;
   
    useEffect(() => {   
       
        //updated a user's complaints
        Axios.post("http://localhost:3001/updateComplaint",{
            email: data.email,
            status: data.status,
            id: data.id,
        }).then((response)=>{
         
            
        });

        navigate('/dashboard');
      
    });

  

   return(
       <div className="update">

       </div>
   );

}

export default Update;