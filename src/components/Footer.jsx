import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Heart, Shield, Phone, Mail, MapPin, Award, ExternalLink, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#173F35] text-[#FFF5E8] border-t-3 border-[#315A4D] mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Top Playful Banner */}
        <div className="bg-[#20493E] border-2 border-[#315A4D] rounded-2xl p-6 md:p-8 mb-12 shadow-[4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#F2BE55] border-2 border-white flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,0.3)] shrink-0">
              <Heart className="w-8 h-8 text-[#E97856] fill-[#E97856]" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white">
                Are you a Certified Vet or Animal NGO?
              </h3>
              <p className="text-sm text-[#D9E6D2] font-medium">
                Join India's dedicated pet health & welfare network. Connect with pet parents in your vicinity.
              </p>
            </div>
          </div>
          <Link
            to="/services"
            className="playful-btn bg-[#E97856] hover:bg-[#D86341] text-white border-2 border-white whitespace-nowrap text-sm font-extrabold"
          >
            Partner With Us
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#F2BE55] border-2 border-white flex items-center justify-center shadow-[1px_1px_0px_rgba(0,0,0,0.3)]">
                <PawPrint className="w-5 h-5 text-[#173F35] fill-[#173F35]" />
              </div>
              <span className="font-extrabold text-xl text-white">
                Practo <span className="text-[#E97856]">for</span> Animals
              </span>
            </div>
            <p className="text-sm text-[#D9E6D2] leading-relaxed font-medium">
              Transforming companion animal healthcare into a warm, stress-free, and accessible experience for all pet parents and shelter rescues.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-8 h-8 rounded-full bg-[#20493E] border-2 border-[#315A4D] flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,0.2)] hover:bg-[#E97856] hover:text-white transition-colors cursor-pointer text-[#FFF5E8]" title="Global Pet Network">
                <Globe className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full bg-[#20493E] border-2 border-[#315A4D] flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,0.2)] hover:bg-[#E97856] hover:text-white transition-colors cursor-pointer text-[#FFF5E8]" title="Pet Parent Community">
                <MessageCircle className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full bg-[#20493E] border-2 border-[#315A4D] flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,0.2)] hover:bg-[#E97856] hover:text-white transition-colors cursor-pointer text-[#FFF5E8]" title="Shelter Hotline">
                <Phone className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Quick Care Services */}
          <div>
            <h4 className="font-black text-base text-[#F2BE55] mb-4 uppercase tracking-wider flex items-center gap-2">
              <PawPrint className="w-4 h-4 text-[#E97856]" />
              Discover Care
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link to="/services?category=Veterinary+Care" className="text-[#D9E6D2] hover:underline hover:text-[#F2BE55] transition-colors">
                  Veterinary Clinics & Doctors
                </Link>
              </li>
              <li>
                <Link to="/services?category=Animal+Hospitals" className="text-[#D9E6D2] hover:underline hover:text-[#F2BE55] transition-colors">
                  24/7 Animal Hospitals & ICUs
                </Link>
              </li>
              <li>
                <Link to="/services?category=Pet+Boarding" className="text-[#D9E6D2] hover:underline hover:text-[#F2BE55] transition-colors">
                  Pet Boarding & Daycare Resorts
                </Link>
              </li>
              <li>
                <Link to="/services?category=Diagnostic+Centres" className="text-[#D9E6D2] hover:underline hover:text-[#F2BE55] transition-colors">
                  Diagnostics, X-Rays & Pathology
                </Link>
              </li>
              <li>
                <Link to="/services?category=Pet+Ambulance" className="text-[#D9E6D2] hover:underline hover:text-[#F2BE55] transition-colors">
                  Oxygen-Equipped Pet Ambulances
                </Link>
              </li>
            </ul>
          </div>

          {/* Welfare & Rescue */}
          <div>
            <h4 className="font-black text-base text-[#F2BE55] mb-4 uppercase tracking-wider flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#E97856]" />
              Welfare & Adoption
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link to="/ngos" className="text-[#D9E6D2] hover:underline hover:text-[#F2BE55] transition-colors">
                  Verified Animal Welfare NGOs
                </Link>
              </li>
              <li>
                <Link to="/ngos#adopt" className="text-[#D9E6D2] hover:underline hover:text-[#F2BE55] transition-colors">
                  Adopt a Rescued Pet
                </Link>
              </li>
              <li>
                <Link to="/ngos#volunteer" className="text-[#D9E6D2] hover:underline hover:text-[#F2BE55] transition-colors">
                  Volunteer & Foster Network
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-[#E97856] hover:underline font-bold transition-colors">
                  Report Animal in Distress (SOS)
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#D9E6D2] hover:underline hover:text-[#F2BE55] transition-colors">
                  About Our Community Initiative
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency & Support */}
          <div className="bg-[#20493E] border-2 border-[#315A4D] p-4 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,0.25)]">
            <h4 className="font-black text-base text-[#E97856] mb-3 flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              Emergency Helpline
            </h4>
            <p className="text-xs text-[#D9E6D2] mb-3 font-medium">
              Demo emergency dispatch contact for animal trauma or toxic ingestions:
            </p>
            <div className="bg-[#173F35] border border-[#315A4D] p-2.5 rounded-xl mb-3">
              <span className="text-xs font-bold text-[#D9E6D2] block">Toll-Free SOS:</span>
              <span className="text-base font-black text-[#F2BE55]">1800-425-PAWS</span>
            </div>
            <Link
              to="/emergency"
              className="w-full playful-btn bg-[#E97856] hover:bg-[#D86341] text-white border-2 border-white text-xs py-2 font-bold"
            >
              Open Emergency Page
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#315A4D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#D9E6D2]/80">
          <p>© {new Date().getFullYear()} Practo for Animals. An empathetic animal healthcare directory.</p>
          <div className="flex items-center gap-4">
            <span className="soft-tag bg-[#20493E] text-white border-[#315A4D]">🐾 For Every Paw, Hoof & Whisker</span>
            <span className="text-[#315A4D]">•</span>
            <span>Refined Warm Palette Edition</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
