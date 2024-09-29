import React from 'react'

const Admin = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-pink-300">
      <div className="text-center p-8  rounded-lg">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pink-600 mb-4">
          Welcome to Admin Page
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-pink-500">
          Manage your site with ease
        </p>
      </div>
    </div>
  )
}

export default Admin