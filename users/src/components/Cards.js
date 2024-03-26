import React from "react";

const Cards = ({ el }) => {
  return (
    <>

      <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
        <div class="mb-8">
          <img
            class="object-center object-cover rounded-full h-36 w-36"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="photo"
          />
        </div>
        <div class="text-center">
          <p class="text-xl text-white font-bold mb-2">{el.name}</p>
          <p class="text-base text-gray-400 font-normal">{el.email}</p>
          <p class="text-gray-400 font-normal">{el.phone}</p>
          <p class="text-gray-400 font-normal">{el.website}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
