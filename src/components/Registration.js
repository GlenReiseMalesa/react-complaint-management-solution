import '../App.css';
import React,{ useState } from 'react';
import {BrowserRouter ,Link,Navigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';
import Select from 'react-select'





function Register(){

   const [emailAddress, setEmailAddress] = useState("");
   const [passWord, setPassWord] = useState("");
   const [userRole, setUserRole] = useState("");
   const [userResidence, setUserResidence] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setlastName] = useState("");
   const [contact, setContact] = useState("");


   const funcRegister = () =>{
      Axios.post("http://localhost:3001/register",{
         emailAddress: emailAddress,
         password: passWord,
         role: userRole,
         residence: userResidence,
         firstName: firstName,
         lastName: lastName,
         contact: contact,
      }).then((response)=>{
         //console.log(response);
      })
   };

   const roleOptions = [
      { value: 'Student', label: 'Student' },
      { value: 'Admin', label: 'Admin' },
    ];


   const resOptions = [
      { value: 'Magnolia', label: 'Magnolia - Residence' },
      { value: 'Akani', label: 'Akani - Day House' },
      { value: 'Impumelelo', label: 'Impumelelo - Residence' },
      { value: 'Moshate Heights', label: 'Moshate Heights - Residence' },
      { value: 'Lebone', label: 'Lebone - Residence' },
      { value: 'Karibu-Jamii', label: 'Karibu-Jamii - Residence' },
      { value: 'Afslaan', label: 'Afslaan - Residence' },
      { value: 'Maqhawe', label: 'Maqhawe - Residence' },
      { value: 'Cornerstone', label: 'Cornerstone - Residence' },
      { value: 'Oppierif', label: 'Oppierif - Residence' },
      { value: 'Azania', label: 'Azania - Day House' },
      { value: 'Thomas Sankara', label: 'Thomas Sankara - Residence' },
      { value: 'Jabali', label: 'Jabali - Day House' },
      { value: 'Gloucester', label: 'Gloucester - Residence' },
      { value: 'Falcons', label: 'Falcons - Day House' },
      { value: 'Faranani', label: 'Faranani - Residence' },
   ];


   const onRoleChange = (data) => {
  
      setUserRole(data);
    };

    const onResidenceChange = (data) => {

      setUserResidence(data);
    };





   return(
       <div className="register">
           <h1>Register</h1>
           <input type="text" onChange={(e)=>{ setFirstName(e.target.value) }} placeholder='first name..' />
           <input type="text" onChange={(e)=>{ setlastName(e.target.value) }} placeholder='last name..' />
           <input type="text" onChange={(e)=>{ setContact(e.target.value) }} placeholder='contact number..' />
           <input type="email" onChange={(e)=>{ setEmailAddress(e.target.value) }} placeholder='email address..' />
           <input type="password" onChange={(e)=>{ setPassWord(e.target.value) }} placeholder='password..' />
           <Select placeholder='Are you a student or admin?'  onChange={onRoleChange}  isMulti  options={roleOptions} className="userRole"  classNamePrefix="select"/>
           <Select placeholder='What is the name of your residence?'  onChange={onResidenceChange}  isMulti  options={resOptions} className="residenceName"  classNamePrefix="select"/>
           <button onClick={ funcRegister }>Register</button>
           <Link to="/">have an account?</Link>
       </div>
   );
}

export default Register;