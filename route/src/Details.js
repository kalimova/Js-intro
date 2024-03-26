import React from "react";
import Home from "./Home";
import { NavLink } from "react-router-dom";

const Details = ({ isOpen, setIsEmpty }) => {
console.log(isOpen);
  return (
    <>
        <div className="w-full md:w-1/2 xl:w-1/3 px-4">
          <div className="bg-white rounded-lg overflow-hidden mb-10">
            <img src={isOpen.image} alt="image" className="w-full" />
            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
              <h3>
                <a
                  href="javascript:void(0)"
                  className="
                      font-semibold
                      text-dark text-xl
                      sm:text-[22px]
                      md:text-xl
                      lg:text-[22px]
                      xl:text-xl
                      2xl:text-[22px]
                      mb-4
                      block
                      hover:text-primary
                    "
                >
                  {isOpen.title}
                </a>
              </h3>
              <p className="text-base text-body-color leading-risOpenaxed mb-7">
                {isOpen.desc}
              </p>
              <NavLink to = "/basket" onClick={setIsEmpty(isOpen)}>
              View Details
              </NavLink>
            </div>
          </div>
      </div>
    </>
  );
};

export default Details;
