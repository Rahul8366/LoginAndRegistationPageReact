import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

    
export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   const navigate=useNavigate();
    
    async function login(event){
        event.preventDefault();
       try{
        await axios.post("http://localhost:8080/api/login",{
            email:email,
            password:password,
       }).then((res)=> 
       {
        console.log(res.data);
        if(res.data.message === "email not exist")
        {
            alert("Email not exist");
        }
        else if(res.data.message === "login success")
             {
               navigate("/home");
             }
        else{
           alert("Incorrect Email and password not match");
        }
    },fail=>{
        console.error(fail);
       });
        }
        catch(err){
            alert(err);
        }
    }
    
    

  const Register= () => {
    navigate("/register");
  };

  return (
    <div className='container'>
        <div className='card'>
        <div className='card-body'>
        <h1>student Login</h1>
        <form>
     <div class="form-group">
    <label for="exampleInputEmail1">email </label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="email" value={email} onChange={(event) => {setEmail(event.target.value);}} />
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(event) => {setPassword(event.target.value);}} />
  </div>
  <button type="submit" class="btn btn-primary" onClick={login}>Login</button>
  <button type="submit" class="btn btn-primary" onClick={Register}>Register</button>
</form>
</div>
</div>
    </div>
  )
}
