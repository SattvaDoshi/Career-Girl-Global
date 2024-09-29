import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Benefits from './pages/Benefits';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Admin from './pages/admin/Admin';
import Internships from './pages/Internships';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthContext';
import Blogging from './pages/admin/Blogging';
import ContactData from './pages/admin/ContactData';
import UserData from './pages/admin/UserData';
import AdminHeader from './pages/admin/AdminHeader';
import InternshipsData from './pages/admin/InternshipsData';


function App() {

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const ProtectedRoute = ({ children }) => {
    const auth = localStorage.getItem('authToken');
    if(auth)
      setIsAuthenticated(true)
    if (!auth) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated ? <AdminHeader /> : <Header />}
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Benefits />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blogging"
            element={
              <ProtectedRoute>
                <Blogging />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/contact-form"
            element={
              <ProtectedRoute>
                <ContactData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/user-details"
            element={
              <ProtectedRoute>
                <UserData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/internship-details"
            element={
              <ProtectedRoute>
                <InternshipsData />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
