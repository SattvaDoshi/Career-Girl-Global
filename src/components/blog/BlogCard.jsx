import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ blog }) => {
  return (
    <Link to={blog.blogLink} target='_blank'>
      <motion.div 
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <img 
            src={blog.imgURL} 
            alt={blog.title} 
            className="w-full h-56 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2 text-gray-800 line-clamp-2">{blog.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
            <motion.span 
              className="text-purple-600 font-semibold text-sm"
              whileHover={{ x: 5 }}
            >
              Read More →
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default BlogCard;