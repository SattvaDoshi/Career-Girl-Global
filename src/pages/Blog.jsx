import React, { useState } from 'react'
import CarouselCard from '../components/blog/CaroselCard'
import PublishBlog from '../components/blog/PublishBlog'
import BlogList from '../components/blog/BlogList'

const Blog = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleBlogAdded = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };
  return (
    <div>
      <CarouselCard/>
      <BlogList key={refreshKey}/>
      <PublishBlog onBlogAdded={handleBlogAdded}/>
    </div>
  )
}

export default Blog