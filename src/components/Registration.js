import '../App.css';
import React,{ useState } from 'react';
import {BrowserRouter ,Link,Navigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';
import Select from 'react-select'
import Logo from "./newlogo.svg";




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
       <div className="register text-center">
           <main className="form-signin w-100 m-auto">
             <form>
                   <img className="mb-4" src={Logo} alt="" width="80" height="60" />
                   <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

                   <div className="form-floating mb-2">
                     <input type="text" className="form-control" id="floatingInput" onChange={(e)=>{ setFirstName(e.target.value) }} placeholder='first name..' />
                     <label for="floatingInput">First name</label>
                   </div>

                   <div className="form-floating mb-2">
                   <input type="text" className="form-control" id="floatingInput" onChange={(e)=>{ setlastName(e.target.value) }} placeholder='last name..' />
                     <label for="floatingInput">Last name</label>
                   </div>

                   <div className="form-floating mb-2">
                   <input type="text" className="form-control" id="floatingInput" onChange={(e)=>{ setContact(e.target.value) }} placeholder='contact number..' />
                     <label for="floatingInput">Contact number</label>
                   </div>

                   <div className="form-floating mb-2">
                   <input type="email" className="form-control" id="floatingInput" onChange={(e)=>{ setEmailAddress(e.target.value) }} placeholder='email address..' />
                     <label for="floatingInput">Email address</label>
                   </div>

                   <div className="form-floating mb-2">
                   <input type="password" className="form-control" id="floatingInput" onChange={(e)=>{ setPassWord(e.target.value) }} placeholder='password..' />
                     <label for="floatingInput">Password</label>
                   </div>

           
                  <Select placeholder='Are you a student or admin?'  onChange={onRoleChange}  isMulti  options={roleOptions} className="form-floating mb-2"  classNamePrefix="select"/>
                  <Select placeholder='What is the name of your residence?'  onChange={onResidenceChange}  isMulti  options={resOptions} className="form-floating mb-2"  classNamePrefix="select"/>
                  <button className="w-100 btn btn-lg btn-primary"  onClick={ funcRegister }>sign up</button>
                  <p className="mt-5 mb-3 text-muted"><Link to="/">have an account?</Link></p>

              </form>
           </main>
       </div>
   );
}

export default Register;