import axios from "axios";
import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { URL } from "../../const";

const PublishBlog = () => {
  const [form, setForm] = useState({
    title: '',
    imgURL: '',
    description: '',
    blogLink: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${URL}/blog`, form);
      setForm({
        title: '',
        imgURL: '',
        description: '',
        blogLink: ''
      });
      toast.success("Blog added successfully");
      window.location.reload();
    } catch (error) {
      console.error('Error adding blog:', error);
      toast.error("Failed to add blog");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <div className="bg-pink-300 pb-8 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto  p-4 sm:p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6 text-center">Publish New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="imgURL" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input
                type="text"
                id="imgURL"
                name="imgURL"
                value={form.imgURL}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter blog description"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none transition duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="blogLink" className="block text-sm font-medium text-gray-700 mb-1">Blog URL</label>
              <input
                type="text"
                id="blogLink"
                name="blogLink"
                value={form.blogLink}
                onChange={handleChange}
                placeholder="Enter blog URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
                required
              />
            </div>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full bg-pink-600 text-white py-3 px-4 rounded-md hover:bg-pink-700 transition duration-300 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Publishing...' : 'Publish Blog'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default PublishBlog;