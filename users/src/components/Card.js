import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

const Card = () => {
  const [open, setOpen] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then(({ data }) =>
      setOpen(data)
    );
  }, []);
  console.log(open);
  return (
<>
<div class="w-full bg-gray-800">
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
            <h2 class="text-base font-bold text-indigo-600">
                We have the best equipment in the market
            </h2>
            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                Check our awesome team memwhite            
            </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {open.map((el) => (
    <Cards el={el}/>
  ))} 
        </div>
    </section>
</div>
  
  </>
  )
};

export default Card;
   