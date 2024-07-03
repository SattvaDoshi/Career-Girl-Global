import axios from "axios";
import React,{ useState } from "react";


const PublishBlog = ({ onBlogAdded }) => {
  const [form, setForm] = useState({ title: '', imgURL: '', description: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/blog', form);
      onBlogAdded();
      setForm({ title: '', imgURL: '', description: '' });
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="url"
        name="imgURL"
        value={form.imgURL}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600">
        Add Blog
      </button>
    </form>
  );
};

export default PublishBlog