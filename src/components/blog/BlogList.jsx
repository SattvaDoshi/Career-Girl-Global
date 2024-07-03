import React,{useState,useEffect} from 'react';
import BlogCard from './BlogCard'
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
  
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/blog?page=${page}&limit=9`);
        setBlogs(prevBlogs => [...prevBlogs, ...response.data.data.blogs]);
        setTotalPages(response.data.data.totalPages);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      fetchBlogs();
    }, [page]);
    const loadMore = () => {
        if (page < totalPages) {
          setPage(prevPage => prevPage + 1);
        }
      };
    
      return (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {blogs.map(blog => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
          {page < totalPages && (
            <button
            onClick={loadMore}
            disabled={loading}
            className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 disabled:bg-pink-300"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        )}
      </div>
    );
  };

export default BlogList;