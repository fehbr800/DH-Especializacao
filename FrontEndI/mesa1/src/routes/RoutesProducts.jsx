import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import NavBar from '../components/NavBar';
import ProductDetail from '../pages/ProductDetail';

export default function RoutesProducts() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar><Home /></NavBar>} />
                <Route path="/productDetails/:id" element={<ProductDetail/>} />
            </Routes>
        </BrowserRouter>
    );
};


