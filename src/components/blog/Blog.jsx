import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'The Future of AI', content: 'Artificial Intelligence is rapidly evolving...' },
  ]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2;

  const carouselItems = [
    { id: 1, image: 'path/to/image1.jpg', title: 'Slide 1' },
    { id: 2, image: 'path/to/image2.jpg', title: 'Slide 2' },
    { id: 3, image: 'path/to/image3.jpg', title: 'Slide 3' },
  ];

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
    setNewBlog({ title: '', content: '' });
  };

  return (
    <div className="container mx-auto px-4">
      <section className="mb-8">
        <Carousel infiniteLoop autoPlay interval={3000} showThumbs={false}>
          {carouselItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <p className="legend">{item.title}</p>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="border p-4 rounded shadow">
              <h3 className="font-bold">{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          {[...Array(Math.ceil(blogs.length / blogsPerPage)).keys()].map((i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-1">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBlog.title}
              onChange={handleInputChange}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block mb-1">Content:</label>
            <textarea
              id="content"
              name="content"
              value={newBlog.content}
              onChange={handleInputChange}
              className="w-full border rounded px-2 py-1"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Blog
          </button>
        </form>
      </section>
    </div>
  );
};

export default Blog;
