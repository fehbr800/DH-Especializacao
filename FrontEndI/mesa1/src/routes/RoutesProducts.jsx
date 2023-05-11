import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
// import ProductDetail from '../pages/ProductDetail';

export default function RoutesProducts() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/productDetails/:id" element={<ProductDetail/>} /> */}
            </Routes>
        </BrowserRouter>
    );
};


