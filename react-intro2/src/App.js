import React, { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Basket from "./pages/Basket";


const App = () => {
  const [isOpenDay, setIsOpenDay] = useState(false);
  const [num, setNum] = useState(0);
  const [isProduct, setIsProduct] = useState([]);
  return (
    <>
      <Header setIsOpenDay={setIsOpenDay} isOpenDay = {isOpenDay} num = {num}/>
      <Cards isOpenDay={isOpenDay} setIsProduct = {setIsProduct}/>
      <Basket isProduct = {isProduct}/>
    </>
  );
};


export default App;

// ночной режим сделать,бади темный, бэкграунд карточки  меняется на меннее темный цвет,текст белый, в батон иконку на кнопку, солнце меняется на луну

// дз у вас есть кард, когда мы нажимаем на add to basket
