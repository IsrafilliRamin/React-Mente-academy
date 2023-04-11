import React, { createElement } from "react";

const Tailwind = () => {
  let arr = ["alma", "armud", "gilas"];
  /* 
    let arr = ["alma","armud","gilas"]

    let li = arr.map((item)=>createElement("li",null,item))
    let ul = createElement("ul",null,li)

    let main = createElement("main",null,ul)

    return main */

  return (
    <>
      <div className="bg-orange-600">Tailwind</div>
      <ul>
        {arr.map((meyveleri, index) => (
          <li key={index}>{meyveleri}</li>
        ))}
      </ul>
    </>
  );
};

export default Tailwind;
