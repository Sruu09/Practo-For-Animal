import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ProviderDetail from './pages/ProviderDetail';
import NGOs from './pages/NGOs';
import Emergency from './pages/Emergency';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F9FB]">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/provider/:id" element={<ProviderDetail />} />
          <Route path="/ngos" element={<NGOs />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
