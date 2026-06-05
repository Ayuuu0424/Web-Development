// ES7 me React by default imported hota h isliye err show ho skta h
// website run krne k liye dependencies use hoti h
// website develop krne k liye dev dependencies use hoti h

//  import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";

// import { FaWifi } from "react-icons/fa";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
