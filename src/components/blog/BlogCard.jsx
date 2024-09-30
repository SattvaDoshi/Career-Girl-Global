import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext'; 

const BlogCard = ({ blog, onDelete }) => {
  const { isAuthenticated } = useAuth();

  const handleDelete = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    if (window.confirm('Are you sure you want to delete this blog?')) {
      onDelete(blog._id);
    }
  };

  return (
    <Link to={blog.blogLink} target='_blank'>
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out h-full flex flex-col"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative h-56">
          <img
            src={blog.imgURL}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>
        <div className="p-6 flex flex-col flex-grow"
         style={{ backgroundColor: 'rgba(255, 105, 180, 0.8)' }}>
          <h3 className="font-bold text-xl mb-2 text-pink-500 line-clamp-2" style={{ fontFamily: 'Abril FatFace' }}>{blog.title}</h3>
          <p className="text-gray-100 text-sm mb-4 line-clamp-3 flex-grow" style={{ fontFamily: 'Montserrat' }}>{blog.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
            <motion.span
              className="text-pink-100 font-semibold text-sm" style={{ fontFamily: 'Montserrat' }}
              whileHover={{ x: 5 }}
            >
              Read More →
            </motion.span>
          </div>
          {isAuthenticated && (
            <motion.button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
              onClick={handleDelete}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Delete
            </motion.button>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

export default BlogCard;