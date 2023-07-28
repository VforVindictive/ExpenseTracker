import React from "react";

function Form({number,name,type,Button}){


    const numberOfElements = number;
    const elements = Array.from({ length: numberOfElements }, (_, index) => (

        <>
        <div className="row mt-3">
        <label key={index} >{name[index]}</label>
        <input key={index} className="border-4 border-rose-500 rounded-md " type={type[index]}></input>
       </div>
       </>
        
        ));
       
 return(

<>
       {elements}
       {Button}

</>

)
}

export default Form;



  






