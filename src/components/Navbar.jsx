import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Menu, 
  X, 
  User, 
  PawPrint, 
  ShieldAlert, 
  Sparkles 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pets } = useApp();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'NGOs & Rescue', path: '/ngos' },
    { name: 'About Us', path: '/about' },
    { name: 'My Profile', path: '/profile' },
  ];

  return (
    <>
      {/* Top Warm Announcement Bar */}
      <div className="bg-[#F2BE55] text-[#173F35] text-xs md:text-sm font-bold py-1.5 px-4 text-center border-b border-[#315A4D]/30 flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-[#173F35] animate-pulse" />
        <span>Free Rabies & Wellness checkup drive with registered NGOs this weekend in your city!</span>
        <Link to="/ngos" className="underline hover:text-[#E97856] ml-1 font-extrabold hidden sm:inline">
          View Details →
        </Link>
      </div>

      <header className="sticky top-0 z-50 bg-[#173F35] text-[#FFF5E8] border-b-2 border-[#315A4D] px-4 lg:px-8 py-3 transition-all duration-200 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-2xl bg-[#F2BE55] border-2 border-[#FFF5E8] flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,0.3)] group-hover:rotate-6 transition-transform">
              <PawPrint className="w-6 h-6 text-[#173F35] fill-[#173F35]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl lg:text-2xl leading-none text-white tracking-tight">
                Practo <span className="text-[#E97856]">for</span> Animals
              </span>
              <span className="text-[11px] font-semibold text-[#D9E6D2] tracking-wide">
                Gentle Care, Happy Tails
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-[#20493E] border-2 border-[#315A4D] px-3 py-1.5 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#F2BE55] text-[#173F35] shadow-[1px_1px_0px_#173F35]'
                      : 'text-[#FFF5E8]/85 hover:text-white hover:bg-[#173F35]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Section: Prominent Emergency Vet Button & Profile Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/emergency"
              className="emergency-pulse-btn rounded-full px-4 lg:px-5 py-2 text-sm md:text-base flex items-center gap-2 cursor-pointer"
              title="24/7 Emergency Veterinary Care & Ambulance"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              <ShieldAlert className="w-4 h-4 text-white" />
              <span>Emergency Vet</span>
            </Link>

            <Link
              to="/profile"
              className="w-10 h-10 rounded-full bg-[#D9E6D2] border-2 border-[#FFF5E8] flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform relative"
              title="My Profile & Pet Dashboard"
            >
              <User className="w-5 h-5 text-[#173F35]" />
              {pets.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E97856] border border-white text-[10px] font-black flex items-center justify-center text-white">
                  {pets.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu & Emergency Quick Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/emergency"
              className="bg-[#E97856] text-white text-xs font-black px-3 py-1.5 rounded-full border-2 border-white shadow-[2px_2px_0px_rgba(0,0,0,0.3)] flex items-center gap-1"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>SOS Vet</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#20493E] border-2 border-[#315A4D] text-white shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t-2 border-[#315A4D] flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-base font-bold flex items-center justify-between border-2 ${
                    isActive
                      ? 'bg-[#F2BE55] border-[#F2BE55] text-[#173F35] shadow-[2px_2px_0px_#173F35]'
                      : 'border-transparent text-[#FFF5E8]/90 hover:bg-[#20493E]'
                  }`
                }
              >
                <span>{link.name}</span>
                <PawPrint className="w-4 h-4 opacity-40" />
              </NavLink>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/emergency"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#E97856] text-white py-3 rounded-xl border-2 border-white font-black flex items-center justify-center gap-2 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
              >
                <ShieldAlert className="w-5 h-5" />
                <span>24/7 Emergency Veterinary Assistance</span>
              </Link>

              <Link
                to="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#D9E6D2] text-[#173F35] py-2.5 rounded-xl border-2 border-[#315A4D] font-bold flex items-center justify-center gap-2 shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
              >
                <User className="w-5 h-5" />
                <span>User & Pets Profile Dashboard</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
