const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"VarsityMaintananceComplaints"
});



//register query
app.post("/register",(req, res)=>{

    const emailAddress = req.body.emailAddress;
    const password = req.body.password;
    const role = req.body.role;
    const residence = req.body.residence;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const contact = req.body.contact;

 
    let actualRole = "";
    for (let x in role) {
        actualRole += role[x].value+"; ";
    }

    let actualRes = "";
    for (let x in residence) {
        actualRes += residence[x].value+"; ";
    }

    db.query(
        "INSERT INTO users (emailAddress, password, role, residence,firstName,lastName,contact) VALUES (?,?,?,?,?,?,?)",
        [emailAddress, password,actualRole, actualRes,firstName,lastName,contact],
        (err, result) =>{
            
        }
    );

});




//update user query
app.post("/updateUser",(req, res)=>{

    const emailAddress = req.body.emailAddress;
    const password = req.body.password;
    const role = req.body.role;
    const residence = req.body.residence;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const contact = req.body.contact;


    db.query(
        "UPDATE users SET emailAddress = ? , password = ? , role = ? , residence = ? , firstName = ? , lastName = ? , contact = ? WHERE emailAddress = ? ",
        [emailAddress, password,role, residence,firstName,lastName,contact,emailAddress],
        (err, result) =>{
            
        }
    );

});



//login query
app.post("/login",(req, res)=>{

    const emailAddress = req.body.emailAddress;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE emailAddress = ? AND password = ?",
        [emailAddress, password],
        (err, result) =>{
            
           if(err){
               res.send({ err: err});
           }

           if(result.length > 0){
               res.send(result);
           }else{
               res.send({ message: "Wrong emailAddress/password!"});
           }

        }
    );

});

//get user query
app.post("/getUser",(req, res)=>{

    const emailAddress = req.body.emailAddress;

    db.query(
        "SELECT * FROM users WHERE emailAddress = ? ",
        [emailAddress],
        (err, result) =>{
            
           if(result.length > 0){
               res.send(result);
           }else{
               
           }

        }
    );

});


//get my complaints
app.post("/getMyComplaints",(req, res)=>{

    const emailAddress = req.body.emailAddress;

    db.query(
        "SELECT * FROM maintanance_issue WHERE emailCreatedBy = ? ",
        [emailAddress],
        (err, result) =>{
            
           if(result.length > 0){
               res.send(result);
           }else{
               
           }

        }
    );

});


//get complaints handle by me
app.post("/getComplaintsHandledByMe",(req, res)=>{

    const emailAddress = req.body.emailAddress;

    db.query(
        "SELECT * FROM maintanance_issue WHERE emailHandledBy = ? AND status = ? ",
        [emailAddress,"started"],
        (err, result) =>{
            
           if(result.length > 0){
               res.send(result);
           }else{
               
           }

        }
    );

});





//get complaints completed by me
app.post("/getComplaintsCompletedByMe",(req, res)=>{

    const emailAddress = req.body.emailAddress;

    db.query(
        "SELECT * FROM maintanance_issue WHERE emailHandledBy = ? AND status = ? ",
        [emailAddress,"completed"],
        (err, result) =>{
            
           if(result.length > 0){
               res.send(result);
           }else{
               
           }

        }
    );

});




//update complaint when the admin starts handling it
app.post("/updateComplaint",(req, res)=>{

    const email = req.body.email;
    const status = req.body.status;
    const id = req.body.id;


    db.query(
        "UPDATE maintanance_issue SET emailHandledBy = ? , status = ? WHERE id = ?",
        [email,status,id],
        (err, result) =>{
            
           if(result.length > 0){
               //res.send(result);
           }else{
               
           }

        }
    );

});




//get all complaints
app.post("/allNewStudentComplaints",(req, res)=>{

    db.query(
        "SELECT * FROM maintanance_issue ",
        (err, result) =>{
            
           if(result.length > 0){
               res.send(result);
           }else{
               
           }

        }
    );

});

//create complaint query
app.post("/createComplaint",(req, res)=>{

    const description = req.body.description;
    const emailCreatedBy = req.body.emailCreatedBy;
    const emailHandledBy = req.body.emailHandledBy;
    const status = req.body.status;
    const dateCreated = req.body.dateCreated;


    db.query(
        "INSERT INTO maintanance_issue (description, emailCreatedBy, emailHandledBy, status,dateCreated) VALUES (?,?,?,?,?)",
        [description, emailCreatedBy,emailHandledBy, status,dateCreated],
        (err, result) =>{
            
        }
    );

});




app.listen(3001,()=>{
    console.log("server running.....");
});