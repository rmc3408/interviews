import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Layout/Header';
import SideBar from './components/SideBar/Sidebar';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SideBar />
      </BrowserRouter>
    </>
  );
}

export default App;
