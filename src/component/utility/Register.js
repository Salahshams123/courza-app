import React from 'react'
import { useState } from 'react';
import "../../css/Auth.css"
import register from "../../images/register.png"
import { Link } from 'react-router-dom';
const Register = () => {
 const [fname,setfname]= useState("");
 const [lname,setlname]= useState("");
 const [email,setemail]= useState("");
 const [password,setpassword]= useState("");
 const [confirmpassword,setconfirmpassword]= useState("");
 const registerUser =(e)=>{
   e.preventDefault();
 };
 return (
  <>
 <section className = "container auth">
     <div className = "card">
     <div className = "form">
      <h2>Sign up</h2>
       <form onSubmit={registerUser}>
       <input type="text" placeholder='First Name' required value={fname} onChange={(e)=>setfname(e.target.value)} />
       <input type="text" placeholder='Last Name' required value={lname} onChange={(e)=>setlname(e.target.value)} />
       <input type="email" placeholder='Email' required value={email} onChange={(e)=>setemail(e.target.value)} />
       <input type="password" placeholder='Password'  required  value={password} onChange={(e)=>setpassword(e.target.value)}/>
       <input type="password" placeholder='confirmPassword'  required  value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}/>
       <button  type="submit" className="--btn --btn-primary --btn-block">Sign up</button>
       </form>
       <span className= "register"><p>Already an account?</p><Link to={"/login"}>Login</Link></span>
     </div>
     </div>
     <div className="img">
     <img src={register} alt="salah"  width={400} />
   </div>
  </section>
  </>
 )
}

export default Register