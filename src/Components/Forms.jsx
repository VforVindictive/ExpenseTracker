import React from "react";

function Form({ number, name, type, Button,style }) {
  const{label,input,form}=style;
  const numberOfElements = number;
  const elements = Array.from({ length: numberOfElements }, (_, index) => (
    <div>
      <label
        key={index}
        className={label}
      >
        {name[index]}
      </label>
      <input
        key={index}
        className={input}
        type={type[index]}
      ></input>
    </div>
  ));

  return (
    <>
      <form action="#" className={form}>
        {elements}
        {Button}
      </form>
    </>
  );
}

export default Form;
