import Home from "./home";
import LoginCard from "./LoginCard";
import Laptops from "./Laptops";
import Phones from "./Phones";
import Accessories from "./Accessories";
import Cart from "./Cart";

import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState }from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route path="/home" element={<Home />} />
              <Route path="/laptops" element={<Laptops />} />
              <Route path="/phones" element={<Phones />} />
                            <Route path="/accessories" element={<Accessories />} />
<Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;