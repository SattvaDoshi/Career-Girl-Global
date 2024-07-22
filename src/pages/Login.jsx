import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { URL } from '../const';
import toast from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const setLocalStorage=(newToken)=>{
    localStorage.setItem('authToken', newToken);
    setIsAuthenticated(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        navigate('/home'); 
        setLocalStorage(data.token);
        toast.success("User Logged in Successfully")
      } else {
        console.error('Login failed:', await response.text());
      }
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-500">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder='Enter your email'
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder='Enter your password'
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:shadow-outline"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;