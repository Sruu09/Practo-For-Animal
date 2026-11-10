import React, { useState } from 'react';
import { 
  Heart, 
  PawPrint, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Gift, 
  UserPlus 
} from 'lucide-react';
import { mockNgos, mockAdoptions } from '../data/mockData';
import { illustrations } from '../assets';

const NGOs = () => {
  const [activeTab, setActiveTab] = useState('ngos');
  const [selectedPetForAdoption, setSelectedPetForAdoption] = useState(null);
  const [adoptionSubmitted, setAdoptionSubmitted] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [donationAmount, setDonationAmount] = useState('1000');
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-12 bg-[#FFF5E8]">
      
      {/* Editorial Header */}
      <div className="bg-[#D9E6D2] border-3 border-[#315A4D] rounded-3xl p-6 md:p-10 shadow-[6px_6px_0px_#315A4D]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-4">
            <span className="soft-tag bg-[#F2BE55] text-xs font-black text-[#173F35]">
              Animal Welfare & Ethical Rescue
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173F35] leading-tight">
              Giving Voiceless Companions Hope, Care & Warm Homes.
            </h1>
            <p className="text-sm sm:text-base text-[#203B34] font-medium max-w-2xl leading-relaxed">
              Discover registered animal shelters, sponsor life-saving treatments, explore adoption listings, and join compassionate local rescue volunteers.
            </p>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="soft-tag bg-white text-xs font-bold text-[#173F35]">
                ❤️ 12,000+ Rescues Enabled
              </span>
              <span className="soft-tag bg-[#FFF5E8] text-xs font-bold text-[#173F35]">
                ✓ 80G Certified Non-Profits
              </span>
              <span className="soft-tag bg-[#F2BE55] text-xs font-bold text-[#173F35]">
                🐾 Zero-Kill Partner Shelters
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center">
            <div className="w-full max-w-xs rounded-2xl border-2 border-[#315A4D] overflow-hidden bg-white p-2 shadow-[4px_4px_0px_#315A4D]">
              <img
                src={illustrations.ngoRescue}
                alt="Animal rescue illustration"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveTab('ngos')}
          className={`playful-btn text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer border-2 border-[#315A4D] ${
            activeTab === 'ngos' ? 'bg-[#173F35] text-white' : 'bg-white text-[#173F35] hover:bg-[#D9E6D2]'
          }`}
        >
          <PawPrint className="w-4 h-4" />
          <span>Registered NGOs & Shelters</span>
        </button>

        <button
          onClick={() => setActiveTab('adopt')}
          className={`playful-btn text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer border-2 border-[#315A4D] ${
            activeTab === 'adopt' ? 'bg-[#173F35] text-white' : 'bg-white text-[#173F35] hover:bg-[#D9E6D2]'
          }`}
        >
          <Heart className="w-4 h-4 text-[#E97856]" />
          <span>Adopt a Rescued Pet</span>
        </button>

        <button
          onClick={() => setActiveTab('volunteer')}
          className={`playful-btn text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer border-2 border-[#315A4D] ${
            activeTab === 'volunteer' ? 'bg-[#173F35] text-white' : 'bg-white text-[#173F35] hover:bg-[#D9E6D2]'
          }`}
        >
          <UserPlus className="w-4 h-4" />
          <span>Volunteer & Foster</span>
        </button>

        <button
          onClick={() => setActiveTab('donate')}
          className={`playful-btn text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer border-2 border-[#315A4D] ${
            activeTab === 'donate' ? 'bg-[#173F35] text-white' : 'bg-white text-[#173F35] hover:bg-[#D9E6D2]'
          }`}
        >
          <Gift className="w-4 h-4 text-[#E97856]" />
          <span>Support & Donate</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: REGISTERED NGOS                                   */}
      {/* ======================================================== */}
      {activeTab === 'ngos' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {mockNgos.map((ngo) => (
              <div 
                key={ngo.id}
                className="playful-card p-6 flex flex-col justify-between bg-white border-2 border-[#315A4D] shadow-[4px_4px_0px_#315A4D]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="soft-tag bg-[#D9E6D2] text-xs font-black text-[#173F35]">
                      Est. {ngo.founded}
                    </span>
                    <span className="soft-tag bg-[#FFF5E8] text-[11px] font-bold text-[#173F35]">
                      {ngo.taxExemption}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-xl text-[#173F35] mb-1">
                    {ngo.name}
                  </h3>
                  <p className="text-xs font-bold text-[#E97856] mb-3">{ngo.cause}</p>

                  <p className="text-xs text-[#52675D] font-medium leading-relaxed mb-4 bg-[#FFF5E8] p-3 rounded-xl border border-[#315A4D]/25">
                    "{ngo.story}"
                  </p>

                  {/* Impact Stats */}
                  <div className="grid grid-cols-2 gap-2 text-center mb-4">
                    <div className="bg-[#D9E6D2] border border-[#315A4D]/30 p-2 rounded-xl">
                      <span className="text-xs font-black text-[#173F35] block">{ngo.rescuedCount}</span>
                      <span className="text-[10px] font-bold text-[#52675D]">Treated</span>
                    </div>
                    <div className="bg-[#F2BE55] border border-[#315A4D]/30 p-2 rounded-xl">
                      <span className="text-xs font-black text-[#173F35] block">{ngo.adoptionsCount}</span>
                      <span className="text-[10px] font-bold text-[#52675D]">Adopted</span>
                    </div>
                  </div>

                  {/* Contact info */}
                  <div className="space-y-1 text-xs text-[#52675D] mb-4">
                    <div className="flex items-center gap-1.5 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#E97856] shrink-0" />
                      <span>{ngo.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold">
                      <Phone className="w-3.5 h-3.5 text-[#173F35] shrink-0" />
                      <span>{ngo.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-[#315A4D]/20 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      setActiveTab('donate');
                    }}
                    className="playful-btn bg-[#E97856] text-white hover:bg-[#D86341] border-2 border-[#315A4D] text-xs py-2 px-3 flex-1 font-bold shadow-[2px_2px_0px_#315A4D]"
                  >
                    Sponsor / Donate
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('volunteer');
                    }}
                    className="playful-btn bg-white hover:bg-[#D9E6D2] text-[#173F35] border-2 border-[#315A4D] text-xs py-2 px-3 flex-1"
                  >
                    Volunteer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: ADOPTION LISTINGS (Warm Ivory & Coral Accents)    */}
      {/* ======================================================== */}
      {activeTab === 'adopt' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-[#173F35]">
                Ready for Loving Forever Homes
              </h2>
              <p className="text-xs sm:text-sm text-[#52675D] font-medium">
                Vaccinated, microchipped, and vetted with zero commercial breeding charges.
              </p>
            </div>
            <span className="soft-tag bg-[#D9E6D2] text-xs font-bold text-[#173F35]">
              {mockAdoptions.length} Available Buddies
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockAdoptions.map((pet) => (
              <div 
                key={pet.id}
                className="playful-card p-4 flex flex-col justify-between bg-white border-2 border-[#315A4D] shadow-[4px_4px_0px_#315A4D]"
              >
                <div>
                  <div className="w-full h-36 rounded-2xl bg-[#D9E6D2] border-2 border-[#315A4D] flex items-center justify-center p-2 mb-3 shadow-[2px_2px_0px_#315A4D]">
                    <img
                      src={illustrations.adoptionLove}
                      alt={pet.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-lg text-[#173F35]">{pet.name}</h3>
                    <span className="text-[10px] font-black bg-[#F2BE55] text-[#173F35] px-2 py-0.5 rounded-full border border-[#315A4D]">
                      {pet.age}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-[#E97856]">{pet.type} • {pet.gender}</p>
                  
                  <p className="text-xs text-[#52675D] mt-2 font-medium line-clamp-3">
                    "{pet.story}"
                  </p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {pet.traits.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-bold bg-[#FFF5E8] text-[#173F35] px-2 py-0.5 rounded-md border border-[#315A4D]/30">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#315A4D]/20 text-[11px] font-semibold text-[#52675D]">
                    Shelter: <strong className="text-[#173F35]">{pet.ngo}</strong>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t-2 border-[#315A4D]/20">
                  <button
                    onClick={() => {
                      setSelectedPetForAdoption(pet);
                      setAdoptionSubmitted(false);
                    }}
                    className="w-full playful-btn bg-[#173F35] hover:bg-[#20493E] text-white border-2 border-[#315A4D] text-xs font-black py-2 shadow-[2px_2px_0px_#315A4D]"
                  >
                    Apply to Adopt {pet.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: VOLUNTEER & FOSTER                                */}
      {/* ======================================================== */}
      {activeTab === 'volunteer' && (
        <div className="bg-white border-3 border-[#315A4D] rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_#315A4D]">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="soft-tag bg-[#D9E6D2] text-xs font-black text-[#173F35]">
                Join Community Helpers
              </span>
              <h2 className="text-3xl font-black text-[#173F35]">
                Become a Volunteer or Foster Caregiver
              </h2>
              <p className="text-sm text-[#52675D] font-medium">
                Even 2 hours a weekend walking shelter dogs or temporarily hosting a recovering puppy saves lives.
              </p>
            </div>

            {volunteerSubmitted ? (
              <div className="bg-[#D9E6D2] border-2 border-[#315A4D] p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-white border border-[#315A4D] flex items-center justify-center mx-auto text-xl">
                  🎉
                </div>
                <h3 className="text-xl font-black text-[#173F35]">Application Received!</h3>
                <p className="text-sm text-[#52675D] font-medium">
                  Thank you for stepping up! A volunteer coordinator from your nearest shelter will reach out via WhatsApp/email within 24 hours.
                </p>
                <button
                  onClick={() => setVolunteerSubmitted(false)}
                  className="playful-btn bg-white text-[#173F35] border-2 border-[#315A4D] text-xs font-bold"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setVolunteerSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-black text-[#173F35] block mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      required 
                      defaultValue="Aanya Sharma"
                      className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-sm font-bold text-[#173F35] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-[#173F35] block mb-1">Mobile / WhatsApp</label>
                    <input 
                      type="tel" 
                      required 
                      defaultValue="+91 98765 43210"
                      className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-sm font-bold text-[#173F35] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-black text-[#173F35] block mb-1">Area / Locality in Bengaluru</label>
                  <input 
                    type="text" 
                    required 
                    defaultValue="Indiranagar, Bengaluru"
                    className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-sm font-bold text-[#173F35] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-[#173F35] block mb-1">How Would You Like to Help?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-[#173F35]">
                    <label className="flex items-center gap-2 p-2.5 bg-[#D9E6D2] rounded-xl border border-[#315A4D] cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-[#173F35]" />
                      <span>Weekend Shelter Dog Walking</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 bg-[#D9E6D2] rounded-xl border border-[#315A4D] cursor-pointer">
                      <input type="checkbox" className="accent-[#173F35]" />
                      <span>Temporary Foster Parent (Home)</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 bg-[#D9E6D2] rounded-xl border border-[#315A4D] cursor-pointer">
                      <input type="checkbox" className="accent-[#173F35]" />
                      <span>Emergency Transit / Pet Taxi</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 bg-[#D9E6D2] rounded-xl border border-[#315A4D] cursor-pointer">
                      <input type="checkbox" className="accent-[#173F35]" />
                      <span>Adoption Camp & Social Media</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full playful-btn bg-[#E97856] text-white hover:bg-[#D86341] border-2 border-[#315A4D] text-sm font-black py-3 shadow-[3px_3px_0px_#315A4D]"
                >
                  Submit Volunteer Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 4: DONATE & SPONSOR                                  */}
      {/* ======================================================== */}
      {activeTab === 'donate' && (
        <div className="bg-white border-3 border-[#315A4D] rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_#315A4D]">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="soft-tag bg-[#F2BE55] text-xs font-black text-[#173F35]">
                Support Medical Treatment
              </span>
              <h2 className="text-3xl font-black text-[#173F35]">
                Sponsor a Street Animal's Healing
              </h2>
              <p className="text-sm text-[#52675D] font-medium">
                Direct community funding for bandages, antibiotics, fracture pins, and post-surgery rehabilitation.
              </p>
            </div>

            {donationSuccess ? (
              <div className="bg-[#D9E6D2] border-2 border-[#315A4D] p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#F2BE55] border border-[#315A4D] flex items-center justify-center mx-auto text-xl">
                  ❤️
                </div>
                <h3 className="text-xl font-black text-[#173F35]">Thank You for Your Generosity!</h3>
                <p className="text-sm text-[#52675D] font-medium">
                  Your pledge of <strong>₹{donationAmount}</strong> has been allocated to critical antibiotic & food supplies for rescued animals. An 80G tax receipt has been generated.
                </p>
                <button
                  onClick={() => setDonationSuccess(false)}
                  className="playful-btn bg-white text-[#173F35] border-2 border-[#315A4D] text-xs font-bold"
                >
                  Make Another Contribution
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDonationSuccess(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-xs font-black text-[#173F35] block mb-2">Select Donation Amount</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['500', '1000', '2500', '5000'].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setDonationAmount(amt)}
                        className={`playful-btn text-xs font-black py-2.5 cursor-pointer border-2 border-[#315A4D] ${
                          donationAmount === amt ? 'bg-[#173F35] text-white' : 'bg-[#FFF5E8] text-[#173F35]'
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FFF5E8] border border-[#315A4D]/30 p-3 rounded-xl text-xs space-y-1">
                  <p className="font-extrabold text-[#173F35]">Where does your ₹{donationAmount} go?</p>
                  <p className="text-[#52675D]">
                    Provides 7 days of sterile surgical dressing + 10 kg high-protein nutrition for street dog trauma recovery.
                  </p>
                </div>

                <div>
                  <label className="text-xs font-black text-[#173F35] block mb-1">Donor Name (For 80G Tax Exemption)</label>
                  <input
                    type="text"
                    required
                    defaultValue="Aanya Sharma"
                    className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-sm font-bold text-[#173F35] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-[#173F35] block mb-1">PAN Card Number (Optional for Tax Receipt)</label>
                  <input
                    type="text"
                    placeholder="ABCDE1234F"
                    className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-sm font-bold text-[#173F35] focus:outline-none uppercase"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full playful-btn bg-[#E97856] text-white hover:bg-[#D86341] border-2 border-[#315A4D] text-sm font-black py-3 shadow-[3px_3px_0px_#315A4D]"
                >
                  Complete Donation of ₹{donationAmount} (Demo Gateway)
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ADOPTION APPLICATION MODAL                               */}
      {/* ======================================================== */}
      {selectedPetForAdoption && (
        <div className="fixed inset-0 z-50 bg-[#173F35]/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border-3 border-[#315A4D] rounded-3xl max-w-lg w-full p-6 shadow-[8px_8px_0px_#315A4D] relative animate-in fade-in zoom-in-95 duration-200">
            
            {adoptionSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#D9E6D2] border-2 border-[#315A4D] flex items-center justify-center mx-auto">
                  ❤️
                </div>
                <h3 className="text-2xl font-black text-[#173F35]">Adoption Inquiry Submitted!</h3>
                <p className="text-sm text-[#52675D] font-medium">
                  The shelter team for <strong>{selectedPetForAdoption.name}</strong> has received your interest and will arrange a meet-and-greet call.
                </p>
                <button
                  onClick={() => setSelectedPetForAdoption(null)}
                  className="playful-btn bg-[#173F35] text-white border-2 border-[#315A4D] text-xs font-bold"
                >
                  Back to Adoptions
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setAdoptionSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between pb-2 border-b-2 border-[#315A4D]/20">
                  <h3 className="text-xl font-black text-[#173F35]">
                    Adopt {selectedPetForAdoption.name}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setSelectedPetForAdoption(null)}
                    className="w-8 h-8 rounded-full border border-[#315A4D] bg-[#FFF5E8] text-xs font-black text-[#173F35] hover:bg-[#E97856] hover:text-white cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="text-xs bg-[#D9E6D2] p-3 rounded-xl border border-[#315A4D] space-y-1">
                  <p className="font-extrabold text-[#173F35]">{selectedPetForAdoption.name} ({selectedPetForAdoption.type})</p>
                  <p className="text-[#52675D]">Managed by {selectedPetForAdoption.ngo} • {selectedPetForAdoption.location}</p>
                </div>

                <div>
                  <label className="text-xs font-black text-[#173F35] block mb-1">Your Housing Situation</label>
                  <select className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-bold text-[#173F35] focus:outline-none">
                    <option>Apartment with pet-friendly society rules</option>
                    <option>Independent house with fenced yard</option>
                    <option>Rented villa with garden</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-black text-[#173F35] block mb-1">Have you had pets before?</label>
                  <div className="flex gap-4 text-xs font-bold text-[#173F35]">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="experienced" defaultChecked className="accent-[#173F35]" />
                      <span>Yes, experienced pet parent</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="experienced" className="accent-[#173F35]" />
                      <span>First-time adopter</span>
                    </label>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPetForAdoption(null)}
                    className="playful-btn bg-white text-[#173F35] border-2 border-[#315A4D] text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="playful-btn bg-[#173F35] hover:bg-[#20493E] text-white border-2 border-[#315A4D] font-black text-xs px-5 shadow-[2px_2px_0px_#315A4D]"
                  >
                    Send Adoption Request
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default NGOs;
