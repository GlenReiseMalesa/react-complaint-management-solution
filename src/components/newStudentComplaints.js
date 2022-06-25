import '../App.css';
import React,{ useState,useEffect } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';
import NavBar from './NavBar';
import Logo from "./newlogo.svg";



function start(id,email){
       
    
        // //updated a user's complaints
        // Axios.post("http://localhost:3001/updateComplaint",{
        //     email: email,
        //     status: "started",
        //     id: id,
        // }).then((response)=>{
         
          
        // });

        // console.log("Heelo");


}


function NewStudentComplaints(props){

    const [complaints,setComplaints] = useState([]);
 
    useEffect(() => {   
        //get a user's complaints
            Axios.post("http://localhost:3001/allNewStudentComplaints",{
              
            }).then((response)=>{
             
                    if(response.data.message){
                    }else{
                    //get the data                         
                      setComplaints(response.data);             
                    }
                

            });


    });

   return(
       <div className="newStudentComplaints">
            <div className="container mt-5">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-dark">Latest Maintanance Issues</a></li>
                </ul>
                </header>
            </div>  

          <main className="m-auto">
                {
                    complaints.map((complaint) => {

                        //calc numb days
                        var date_1 = new Date(complaint.dateCreated);

                        const current = new Date();
                        const date = `${current.getMonth()}/${current.getDate()+1}/${current.getFullYear()}`;

                        var date_2 = new Date(date);

                        const days = (date_1, date_2) =>{
                            let difference = date_1.getTime() - date_2.getTime();
                            let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
                            return TotalDays;
                        }

                        if(complaint.status == "pending"){
                            return (
                                <div className="w-75 m-auto card text-start mb-5">
                                    <h5 class="card-header">Created By <a href="#">{complaint.emailCreatedBy}</a></h5>
                                    <div className="card-body">
                                        <p className="card-text">{complaint.description}</p>
                                        <button type="button" onClick={start(complaint.id,props.email)} className="btn btn-warning">get started</button>
                                    </div>
                                    <div className="card-footer text-muted">
                                     posted {days(date_1, date_2)}  days ago.
                                    </div>
                                </div>
                            );
                        }


                    })
                }
           </main>
       </div>
   );

}

export default NewStudentComplaints;