import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulando uma chamada assíncrona
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Email:', email);
    console.log('Password:', password);
    setIsLoading(false);
    login();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <form className="max-w-sm w-full p-6 bg-white bg-opacity-85 shadow-lg backdrop-filter backdrop-blur-lg bg-clip-padding backdrop-clip-padding border border-opacity-18 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <p className='p-1 text-1xl font-light'>Entre com seus dados corretamente para acessar o sistema.</p>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="border border-gray-300 p-2 w-full"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="border border-gray-300 p-2 w-full"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-80 flex justify-center "
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
