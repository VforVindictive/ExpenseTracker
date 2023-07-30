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
 
  
  <div className="flex min-h-screen bg-yellow-50 justify-content-center align-items-center  ">
  <div className="flex justify-content-center align-items-center bg-yellow-100   "  >
    
     <form >

       <Form number={4} name={name}  type={type} Button={<Button label="Signup" className="w-full md:w-1/2 lg:w-1/3 px-4 hover:border-slate-400 border-4 border-rose-500" type="submit"/>} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
    
     </form>
     
  </div>
  </div>

  

);
}

export default Signup; 

  
  












