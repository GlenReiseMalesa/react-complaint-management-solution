import '../App.css';
import React,{ useState,useEffect,useRef } from 'react';
import {BrowserRouter ,Link,Navigate,useNavigate, Route ,Routes} from 'react-router-dom';
import Axios from 'axios';
import NavBar from './NavBar';
import Logo from "./newlogo.svg";






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

 
                        //get update data
                        const myData = {
                            email:props.email,
                            status: "started",
                            id: complaint.id
                        }

                        if(complaint.status == "pending"){
                            return (
                                <div className="w-75 m-auto card text-start mb-5">



                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">John Kuni</li>
                                                <li class="list-group-item">0728384875</li>
                                                <li class="list-group-item">Oppierief</li>
                                            </ul>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>




                                    <h5 class="card-header">Created By <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{complaint.emailCreatedBy}</a></h5>
                                    <div className="card-body">
                                        <p className="card-text">{complaint.description}</p>
                                        <Link to="/update" state={myData} className="btn btn-warning">get started</Link>
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