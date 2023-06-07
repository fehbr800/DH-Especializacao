import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Email:', email);
    console.log('Password:', password);
    setIsLoading(false);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <form className="max-w-sm w-full bg-white p-6 bg-white bg-opacity-85 shadow-lg backdrop-filter backdrop-blur-lg bg-clip-padding backdrop-clip-padding border border-opacity-18 rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <p className='text-justify p-1 text-sm'>Entre com seus dados corretamente para acessar o sistema.</p>
        <div className="mb-4">
          
          <input
            type="email"
            className="border border-gray-300 mt-2 p-2 w-full rounded-md"
            placeholder='Digite seu email'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
         
          <input
            type="password"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder='Digite sua senha'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className='flex justify-center'>
        <button
          type="submit"
          className="bg-primary w-60  text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
       >
         {isLoading ? 'Loading...' : 'Login'}
       
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
