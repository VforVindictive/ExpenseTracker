import React from "react";

function Form({ number, name, type, Button }) {
  const numberOfElements = number;
  const elements = Array.from({ length: numberOfElements }, (_, index) => (
    <div className="">
      <label
        key={index}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {name[index]}
      </label>
      <input
        key={index}
        className="block w-full p-2.5 bg-gray-50 border rounded-md "
        type={type[index]}
      ></input>
    </div>
  ));

  return (
    <>
      <form action="#" className="space-y-4 md:space-y-6">
        {elements}
        {Button}
      </form>
    </>
  );
}

export default Form;
