import React, { useState } from "react";
import Form from "../Components/Forms";
import Button from "../Components/Button";


function LogIn(){

    const [formData, setFormData] = useState({
        email: "",
        password: "",
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


    const name = ["Email", "Password"];
    const type = ["text", "password"];
    const classes={label:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",input:"block w-full p-2.5 bg-gray-50 border rounded-md ",form:"space-y-4 md:space-y-6"}

return(

    <>

    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <span className="flex items-center mb-6 text-2xl font-semibold uppercase">SpendSavvy</span>
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4">
            <h1 className="text-center  text-lg/[25px] font-bold font-serif">Log Into Your Accout</h1>

            <Form
              number={2}
              name={name}
              type={type}
              style={classes}
              Button={
                <Button
                  label="Login"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                  name="Create Acount"
                />
              }
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

          </div>
        </div>
      </div>
    </section>
    
  </>



)
}


export default LogIn;