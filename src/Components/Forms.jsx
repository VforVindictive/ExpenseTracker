import React from "react";



function Form({number,name,type}){


    const numberOfElements = number;
    const elements = Array.from({ length: numberOfElements }, (_, index) => (

        <>
        <div className="row mt-3">
        <label key={index} >{name[index]}</label>
        <input key={index} type={type[index]}></input>
       </div>
       </>
        
        ));
       
 return(

<>

{/* <div className="container ">
  <div className="d-flex justify-content-center align-items-center  mt-3"  style={{ height: "90vh" }}>
    
     <form > */}
     
       {elements}

     {/* </form>

 </div>
</div> */}

</>

)
}

export default Form;



  






