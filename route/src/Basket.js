import React from "react";

const Basket = ({isEmpty}) => {
  return (
    <>
    {isEmpty.title?<p>{isEmpty.title}</p>:<p>not found</p>} 
    </>
   
       
  )
};

export default Basket;
