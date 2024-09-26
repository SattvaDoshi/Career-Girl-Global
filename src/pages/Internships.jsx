import React from 'react'
import RemoteInternships from '../components/internships/All-Internship'
import PostInternship from '../components/internships/Post-Internship'
import { useAuth } from '../context/AuthContext';

const Internships = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      {isAuthenticated?<PostInternship/>:<></>}
        <RemoteInternships/>
    </div>
  )
}

export default Internships