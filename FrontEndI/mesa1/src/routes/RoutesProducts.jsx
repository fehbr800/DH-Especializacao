import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import NavBar from '../components/NavBar';
import ProductDetail from '../pages/productDetail/ProductDetail';
import MyProvider from '../context/MyContext';
import Login from '../pages/login/Login';

function RoutesProducts() {
    return (
        <BrowserRouter>
        <MyProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/" element={<NavBar />}>
            <Route path='/' element={<Home />} />
            <Route path="/productDetails/:id" element={<ProductDetail />} />
            </Route>
          </Routes>
        </MyProvider>
      </BrowserRouter>
    );
};

export default RoutesProducts;
