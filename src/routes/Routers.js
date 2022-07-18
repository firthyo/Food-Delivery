import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Carts from "../pages/Carts";
import Checkedout from "../pages/Checkedout";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
import Register from "../pages/Register";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Carts />} />
      <Route path="/checkedout" element={<Checkedout />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
