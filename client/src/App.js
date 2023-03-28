import React from "react";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import ProductsPage from "./Components/ProductsPage";
import {Routes, Route} from "react-router-dom";

const App = () => {

  return <>

    <div className="w-screen h-screen bg-cyan-400">

    <NavBar/>

    <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/about" element={<AboutPage/>}></Route>
      <Route exact path="/products" element={<ProductsPage/>}></Route>
      <Route exact path="/contact" element={<ContactPage/>}></Route>
    </Routes>

    </div>
  </>
};

export default App;