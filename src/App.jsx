import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Benefits from './pages/Benefits'
import Blog from './pages/Blog'
import Form from './components/Form';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/benefits' element={<Benefits />} />
        </Routes>
        <Footer />
        <Form />
        <Toaster />
      </BrowserRouter>


    </div>
  );
}

export default App;



