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
        actualRole += role[x].value+"|";
    }

    let actualRes = "";
    for (let x in residence) {
        actualRes += residence[x].value+"|";
    }

    db.query(
        "INSERT INTO users (emailAddress, password, role, residence,firstName,lastName,contact) VALUES (?,?,?,?,?,?,?)",
        [emailAddress, password,actualRole, actualRes,firstName,lastName,contact],
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



app.listen(3001,()=>{
    console.log("server running.....");
});