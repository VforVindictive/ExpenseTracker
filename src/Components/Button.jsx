import React from "react";




function Button({label,className,type}){
 return (

<>

<div className={className}>
    <button type={type} >{label}</button>
</div>
</>

 )};



 export default Button;