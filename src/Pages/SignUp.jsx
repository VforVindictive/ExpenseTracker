import React, { useState } from "react";
import "./SignUp.css";
import Form from "../Components/Forms";
import Button from "../Components/Button";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

  const name = ["First Name", "Last Name", "Email", "Password"];
  const type = ["text", "text", "text", "password"];

  return (
    
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <span className="flex items-center mb-6 text-2xl font-semibold uppercase">SpendSavvy</span>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4">
              <h1 className="text-center  text-lg/[25px] font-bold font-serif">Create Your Accout</h1>

              <Form
                number={4}
                name={name}
                type={type}
                Button={
                  <Button
                    label="Create Account"
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
  );
}

export default Signup;
