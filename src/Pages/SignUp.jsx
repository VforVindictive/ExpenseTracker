import React,{ useState } from "react";
import './SignUp.css';
import Form from "../Components/Forms";
import Button from "../Components/Button";

function Signup(){

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

const name=["First Name","Last Name","Email","Password"]
const type=["text","text","text","password"];

 return(
 
  
  <div className="container  bg-yellow-50 ">
  <div className="d-flex justify-content-center align-items-center  mt-3"  style={{ height: "90vh" }}>
    
     <form >

       <Form number={4} name={name}  type={type} Button={<Button label="Signup" className="row mt-4 hover:border-slate-400 border-4 border-rose-500" type="submit"/>} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
    
     </form>
     
  </div>
  </div>

  

);
}

export default Signup; 

  
  












