import React from "react";
import './SignUp.css'
import Form from "../Components/Forms"

function Signup(){

const name=["First Name","Last Name","Email","Password"]
const type=["text","text","text","password"];

 return(
  <>
  


  <div className="container ">
  <div className="d-flex justify-content-center align-items-center  mt-3"  style={{ height: "90vh" }}>
    
     <form >

<Form number={4} name={name}  type={type}/>
       {/* <div className="row">
        <label>First Name</label>
        <input type='text'></input>
       </div>
        
        <div className="row">
         <label>Last Name</label>
         <input type='text'></input>
        </div>
        
        <div className="row">
         <label>Email</label>
         <input type='text'></input>
        </div>

        <div className="row">
         <label>Password</label>
         <input type='password'></input>
        </div>
       */}
       <div className="row mt-4">
        <button type="submit">Sign Up!</button>
       </div>
        
     </form>
     
  </div>
  </div>

  </>

);
}

export default Signup; 

  
  












