import '../App.css';
import React,{ useState,useEffect } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';


function Dashboard(){

    const [emailAddress, setEmailAddress] = useState("");
    const [passWord, setPassWord] = useState("");
    const [userRole, setUserRole] = useState("");
    const [userResidence, setUserResidence] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [contact, setContact] = useState("");
    
    const navigate = useNavigate();
    useEffect(() => {   
        //if you haven't logged in you get redirected to the login page
            if(!sessionStorage.getItem("isLoggedIn")){
                navigate('/');
            }


        //get a user's information
            Axios.post("http://localhost:3001/getUser",{
                emailAddress: sessionStorage.getItem("isLoggedIn"),
            }).then((response)=>{

                if(response.data.message){
                }else{
                //get the data   
                // let role = response.data[0].role;  
                // console.log(role); 
                // if(role.includes("Student")){
                //     console.log(response.data[0]); 
                // }    
                 
                setContact(response.data[0].contact);
                setEmailAddress(response.data[0].emailAddress);
                setFirstName(response.data[0].firstName);
                setPassWord(response.data[0].password);
                setUserResidence(response.data[0].reidence);
                setUserRole(response.data[0].role);
                setlastName(response.data[0].lastName);


                }

            });


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