import React, { useContext } from 'react';
import { AuthContext } from '../../context';

const Home = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-200">
      <h1 className="text-4xl font-bold">Bem-vindo à página inicial!</h1>
    </div>
  );
};

export default Home;
