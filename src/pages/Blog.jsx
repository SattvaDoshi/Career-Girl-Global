import React from 'react'
import CarouselCard from '../components/blog/CaroselCard'
import BlogCard from '../components/blog/BlogCard'
import PublishBlog from '../components/blog/PublishBlog'

const Blog = () => {
  return (
    <div>
      <CarouselCard/>
      <BlogCard/>
      <PublishBlog/>
    </div>
  )
}

export default Blog