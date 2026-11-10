import React from 'react';
import { Link } from 'react-router-dom';
import { illustrations } from '../assets';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-16 bg-[#FFF5E8]">
      
      {/* Hero Header */}
      <div className="bg-[#D9E6D2] border-3 border-[#315A4D] rounded-3xl p-6 md:p-12 shadow-[6px_6px_0px_#315A4D]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-4">
            <span className="soft-tag bg-[#F2BE55] text-xs font-black text-[#173F35]">
              Our Compassionate Mission
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173F35] leading-tight">
              Reimagining Animal Healthcare with Empathy & Wonder.
            </h1>
            <p className="text-sm sm:text-base text-[#203B34] font-medium leading-relaxed">
              Animals bring boundless joy into our lives, yet discovering timely, transparent, and gentle care when they fall ill has historically been fragmented and daunting.
            </p>
            <p className="text-sm sm:text-base text-[#203B34] font-medium leading-relaxed">
              <strong>Practo for Animals</strong> was conceived as a digital sanctuary — connecting conscientious pet parents, dedicated veterinary surgeons, animal hospitals, diagnostic pathology centres, and grassroots rescue shelters in one united ecosystem.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl border-3 border-[#315A4D] overflow-hidden bg-white p-2 shadow-[4px_4px_0px_#315A4D]">
              <img
                src={illustrations.communityPets}
                alt="Community pets"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Core Values Pillars (Alternating Warm Ivory Background with White Cards) */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="soft-tag bg-[#D9E6D2] text-xs font-black mb-2 text-[#173F35]">
            The Principles That Guide Us
          </span>
          <h2 className="text-3xl font-black text-[#173F35] mt-1">
            Our Guiding Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="playful-card p-6 bg-white border-2 border-[#315A4D]">
            <div className="w-12 h-12 rounded-xl bg-[#D9E6D2] border-2 border-[#315A4D] flex items-center justify-center mb-4 text-xl shadow-[2px_2px_0px_#315A4D]">
              🩺
            </div>
            <h3 className="font-extrabold text-xl text-[#173F35] mb-2">Fear-Free Veterinary Philosophy</h3>
            <p className="text-xs sm:text-sm text-[#52675D] font-medium leading-relaxed">
              We champion low-stress animal handling, separate cat-and-dog triage waiting lounges, and compassionate clinical care so veterinary visits remain a positive ritual.
            </p>
          </div>

          <div className="playful-card p-6 bg-white border-2 border-[#315A4D]">
            <div className="w-12 h-12 rounded-xl bg-[#F2BE55] border-2 border-[#315A4D] flex items-center justify-center mb-4 text-xl shadow-[2px_2px_0px_#315A4D]">
              🚨
            </div>
            <h3 className="font-extrabold text-xl text-[#173F35] mb-2">Zero Triage Delay</h3>
            <p className="text-xs sm:text-sm text-[#52675D] font-medium leading-relaxed">
              In trauma or toxic ingestions, every second is precious. Our directory prioritizes real-time oxygen ambulances, nearby midnight emergency surgery suites, and instant first-aid advice.
            </p>
          </div>

          <div className="playful-card p-6 bg-white border-2 border-[#315A4D]">
            <div className="w-12 h-12 rounded-xl bg-[#E97856] text-white border-2 border-[#315A4D] flex items-center justify-center mb-4 text-xl shadow-[2px_2px_0px_#315A4D]">
              🐾
            </div>
            <h3 className="font-extrabold text-xl text-[#173F35] mb-2">Street Animals & Welfare</h3>
            <p className="text-xs sm:text-sm text-[#52675D] font-medium leading-relaxed">
              No companion platform is complete without protecting community street animals. We partner directly with 80G registered rescue NGOs for mass sterilization, foster care, and adoptions.
            </p>
          </div>

        </div>
      </div>

      {/* CTA Box (Sage Green with Forest & Coral Buttons) */}
      <div className="bg-[#D9E6D2] border-3 border-[#315A4D] rounded-3xl p-8 text-center space-y-4 shadow-[5px_5px_0px_#315A4D]">
        <h3 className="text-2xl sm:text-3xl font-black text-[#173F35]">
          Ready to experience gentle care for your companion?
        </h3>
        <p className="text-sm text-[#203B34] font-medium max-w-xl mx-auto">
          Explore local clinicians, book wellness appointments, or register your pets in your personal profile.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Link to="/services" className="playful-btn bg-[#173F35] text-white hover:bg-[#20493E] border-2 border-[#315A4D] text-sm shadow-[2px_2px_0px_#315A4D]">
            Browse All Services
          </Link>
          <Link to="/profile" className="playful-btn bg-white hover:bg-[#FFF5E8] text-[#173F35] border-2 border-[#315A4D] text-sm shadow-[2px_2px_0px_#315A4D]">
            Manage Pet Profile
          </Link>
        </div>
      </div>

    </div>
  );
};

export default About;
