import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/home/index';
import Login from '../pages/login/index';
import { AuthProvider, AuthContext } from '../context';

function PrivateRoute({ element: Element, ...rest }) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
}

function RoutesProducts() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}


export default RoutesProducts;
