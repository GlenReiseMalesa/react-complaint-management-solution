import '../App.css';
import React,{ useState,useEffect } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';
import NavBar from './NavBar';
import Profile from './Profile';
import CreateMyComplaint from './createMyComplaint';
import MyComplaints from './myComplaints';

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


//a person is only a student
if(userRole.includes("Student") && !userRole.includes("Admin")){
    return(
        <div className="dashboard">
             <NavBar role={userRole} />
             <div className="b-example-divider"></div>
             <Profile email={emailAddress} password={passWord} role={userRole} res={userResidence} fName={firstName} lName={lastName} contact={contact}/>
             <div className="b-example-divider"></div>
             <CreateMyComplaint email={emailAddress}/>
             <div className="b-example-divider"></div>
             <MyComplaints email={emailAddress}/>
        </div>
    );
}

//a person is only an admin
if(userRole.includes("Admin") && !userRole.includes("Student")){
    return(
        <div className="dashboard">
             <NavBar role={userRole} />
             <div className="b-example-divider"></div>
             <Profile email={emailAddress} password={passWord} role={userRole} res={userResidence} fName={firstName} lName={lastName} contact={contact}/>
        </div>
    );
}

//a person is both a student and admin
if(userRole.includes("Student")&&userRole.includes("Admin")){
    return(
        <div className="dashboard">
             <NavBar role={userRole} />
             <div className="b-example-divider"></div>
             <Profile email={emailAddress} password={passWord} role={userRole} res={userResidence} fName={firstName} lName={lastName} contact={contact}/>
             <div className="b-example-divider"></div>
             <CreateMyComplaint email={emailAddress}/>
             <div className="b-example-divider"></div>
             <MyComplaints email={emailAddress}/>

        </div>
    );
}

}

export default Dashboard;