import React, { useState } from "react";
import Home from "./Home";
import Details from "./Details";
import Basket from "./Basket";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [card, setCard] = useState([]);
  const [isOpen, setIsOpen] = useState({});
  const [isEmpty, setIsEmpty] = useState({});
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route element={<Home setCard={setCard} setIsOpen = {setIsOpen}/>} path="/"  />
          <Route element={<Details card={card} isOpen = {isOpen} setIsEmpty={setIsEmpty}/> } path="/detail" />
          <Route element={<Basket isEmpty = {isEmpty}/>} path="/basket"/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
