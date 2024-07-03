import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={blog.imgURL} alt={blog.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
      <p className="text-gray-700">{blog.description}</p>
    </div>
  </div>
  )
}

export default BlogCard