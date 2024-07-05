import React from 'react'
import CarouselCard from '../components/blog/CaroselCard'
import PublishBlog from '../components/blog/PublishBlog'
import BlogList from '../components/blog/BlogList'

const Blog = () => {

  return (
    <div>
      <CarouselCard/>
      <BlogList />
      <PublishBlog />
    </div>
  )
}

export default Blog