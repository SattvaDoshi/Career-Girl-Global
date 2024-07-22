import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import BlogList from '../components/blog/BlogList';
import PublishBlog from '../components/blog/PublishBlog';
import toast from 'react-hot-toast';

function Admin() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setIsAuthenticated(true);
    } else {
      navigate('/login', { replace: true });
    }
  }, [setIsAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  if (!isAuthenticated)
    <Navigate to="/login" replace={true} />


  const handleLogout = () => {
    console.log("Button");
    localStorage.removeItem('authToken');
    toast.success("User Logged Out Successfully")
    setIsAuthenticated(false);
    navigate('/login', { replace: true });
  };


  return (
    <div className="min-h-screen  bg-gradient-to-r from-pink-200 to-purple-200 relative">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleLogout}
          className="bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600 
        focus:outline-none focus:shadow-outline transition duration-300"
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
        <BlogList />
        <PublishBlog />
      </div>
    </div>
  );
}

export default Admin;