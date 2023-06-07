import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados de login para a API
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <form className="max-w-sm w-full bg-white p-6 rounded shadow-2xl" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <p className='text-justify p-1 text-sm'>Entre com seus dados corretamente para acessar o sistema.</p>
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
        <div className='flex justify-center'>
        <button
          type="submit"
          className="bg-primary w-60  text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
