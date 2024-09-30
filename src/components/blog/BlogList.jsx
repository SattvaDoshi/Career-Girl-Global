import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import axios from 'axios';
import { motion } from 'framer-motion';
import { URL, your_auth_token } from '../../const';
import toast from 'react-hot-toast';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const blogsPerPage = 8;
  
    const fetchBlogs = async (page) => {
        setLoading(true);
        try {
            const response = await axios.get(`${URL}/blog?page=${page}&limit=${blogsPerPage}`);
            setBlogs(response.data.data.blogs);
            setTotalPages(response.data.data.totalPages);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };
  
    useEffect(() => {
        fetchBlogs(currentPage);
    }, [currentPage]);
    
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleDelete = async (id) => {
        try {
          const response = await fetch(`${URL}/delete/${id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${your_auth_token}`
            }
          });
          if (response.ok) {
            toast.success("Blog Deleted Successfully")
            window.location.reload(); 
          } else {
            console.error('Failed to delete blog');
            toast.error("Error in Deleting Blog")
          }
        } catch (error) {
          console.error('Error deleting blog:', error);
        }
      };
    
    return (
        <div className="container min-w-full px-4 py-8 bg-pink-200 ">
            <h1 className="text-5xl font-bold text-center mb-12 text-pink-500 " style={{ fontFamily: "'Abril Fatface', serif" }}>Our Latest Blogs</h1>
            
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-600"></div>
                </div>
            ) : (
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <BlogCard key={blog._id} blog={blog} onDelete={handleDelete} />
                        </motion.div>
                    ))}
                </motion.div>
            )}
            
            <div className="mt-12 flex justify-center items-center space-x-2">
                {[...Array(totalPages).keys()].map((number) => (
                    <button
                        key={number + 1}
                        onClick={() => handlePageChange(number + 1)}
                        className={`px-4 py-2 rounded-full ${
                            currentPage === number + 1
                                ? 'bg-pink-400 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
                        } transition duration-300 ease-in-out`}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogList;