import React from "react";
import './SignUp.css'

function Signup(){
 return(
  <>
  
  <div className="container ">
  <div className="d-flex justify-content-center align-items-center  mt-3"  style={{ height: "90vh" }}>
    
     <form >

       <div className="row">
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

  
  












