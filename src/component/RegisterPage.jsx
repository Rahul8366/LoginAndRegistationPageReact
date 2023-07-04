import React from 'react';
 import { useState } from 'react';
import axios from 'axios';


 export default function RegisterPage(){  
const [firstName,setfirstName] =useState("");
const [lastName,setlastName] =useState("");
const[email,setemail] = useState("");
const[password,setPassword] =useState("");

async function save(event){
    event.preventDefault();
    try{
        await axios.post("http://localhost:8080/api/reg",{
            firstName:firstName,
            lastName:lastName,
             email:email,
             password:password,
        });alert("student register sucefully");
    }
    catch(err){
      alert(err);
    }
}
  return (
    <div className='container'>
        <div className='card'>
        <div className='card-body'>
        <h1>student Register</h1>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value={firstName} onChange={(event) => {setfirstName(event.target.value);}} />
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Last Name</label>
    <input type="text" class="form-control" id="validationTooltip01" placeholder="Last name" value={lastName} onChange={(event) => {setlastName(event.target.value);}} />
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">email </label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="email" value={email} onChange={(event) => {setemail(event.target.value);}} />
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event) => {setPassword(event.target.value);}} />
  </div>
  <button type="submit" class="btn btn-primary" onClick={save}>SAVE</button>

</form>
</div>
</div>
    </div>
  )
}


