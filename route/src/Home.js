import axios from "axios";
import { useState } from "react";
import Card from "./Card";

const Home = ({ setCard, setIsOpen}) => {
    const[info,setInfo]=useState([])
  axios("https://fakestoreapi.com/products")
    .then(({ data }) => setInfo(data));

  return (
    <>
   
<section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]" >
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        {info.map((el) => (
                              <Card el = {el} setIsOpen = {setIsOpen}/>
                            ))
                        }
                    </div>
                </div>
            </section>
    </>
  )
};

export default Home;
