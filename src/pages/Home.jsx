import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  HeartHandshake, 
  Sparkles, 
  PawPrint,
  CheckCircle2,
  AlertCircle,
  Activity,
  Award,
  Heart
} from 'lucide-react';
import PetCarousel from '../components/PetCarousel';
import ServiceCard from '../components/ServiceCard';
import { illustrations } from '../assets';
import { mockAdoptions } from '../data/mockData';
import { useApp } from '../context/AppContext';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Bengaluru');
  const navigate = useNavigate();
  const { setGlobalSearch } = useApp();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setGlobalSearch(searchQuery.trim());
      navigate(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/services');
    }
  };

  const servicesList = [
    {
      title: 'Veterinary Care',
      tag: 'Doctors & Clinics',
      description: 'Consult certified veterinary doctors for routine checkups, vaccinations, puppy/kitten care, and dental health.',
      image: illustrations.vetCare,
      linkTo: '/services?category=Veterinary+Care',
      bgColor: '#D9E6D2'
    },
    {
      title: 'Animal Hospitals',
      tag: '24/7 Multi-Speciality',
      description: 'Multi-speciality hospitals equipped with emergency trauma ICUs, advanced surgery rooms, and in-patient wards.',
      image: illustrations.animalHospital,
      linkTo: '/services?category=Animal+Hospitals',
      bgColor: '#F2BE55'
    },
    {
      title: 'Pet Boarding & Resorts',
      tag: 'Cage-Free Daycare',
      description: 'Cage-free boarding sanctuaries, cat penthouse suites, and daily agility play parks while you travel stress-free.',
      image: illustrations.petBoarding,
      linkTo: '/services?category=Pet+Boarding',
      bgColor: '#D9E6D2'
    },
    {
      title: 'Diagnostic Centres',
      tag: 'Labs & Digital X-Ray',
      description: 'Veterinary pathology, blood profiles, digital radiography, ultrasound, and home sample collection for pets.',
      image: illustrations.diagnosticCenter,
      linkTo: '/services?category=Diagnostic+Centres',
      bgColor: '#FFF5E8'
    },
    {
      title: 'Pet Ambulance',
      tag: 'Oxygen & Critical Transit',
      description: 'Oxygen-equipped emergency animal ambulances with experienced veterinary technicians for rapid doorstep transit.',
      image: illustrations.petAmbulance,
      linkTo: '/services?category=Pet+Ambulance',
      bgColor: '#F2BE55'
    },
    {
      title: 'NGOs & Animal Rescue',
      tag: 'Welfare & Adoptions',
      description: 'Connect with verified animal welfare organisations, report injured street animals, or adopt a rescued companion.',
      image: illustrations.ngoRescue,
      linkTo: '/ngos',
      bgColor: '#D9E6D2'
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 bg-[#FFF5E8]">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Warm Ivory, Forest Green & Coral Accents)*/}
      {/* ======================================================== */}
      <section className="relative pt-8 md:pt-12 pb-8 px-4 lg:px-8 overflow-hidden bg-[#FFF5E8]">
        
        {/* Whimsical Warm Ambient Glows */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#F2BE55]/20 blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-44 h-44 rounded-full bg-[#D9E6D2]/60 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
            
            {/* Left Hero Text & Search Box */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-[#D9E6D2] border-2 border-[#315A4D] px-3.5 py-1.5 rounded-full shadow-[2px_2px_0px_#315A4D]">
                <PawPrint className="w-4 h-4 text-[#E97856] fill-[#E97856]" />
                <span className="text-xs md:text-sm font-extrabold text-[#173F35]">
                  India’s Most Empathetic Animal Care Discovery Platform
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#173F35] leading-[1.1] tracking-tight">
                Compassionate healthcare for your <span className="text-[#E97856] underline decoration-wavy decoration-[#F2BE55]">furry, feathered & purring</span> family.
              </h1>

              <p className="text-base sm:text-lg text-[#52675D] font-medium max-w-2xl leading-relaxed">
                Connect with verified veterinary clinics, 24/7 animal hospitals, cage-free boarding, diagnostics, and rescue NGOs in your neighbourhood.
              </p>

              {/* Prominent White Search Bar with Forest Green Borders */}
              <form 
                onSubmit={handleSearchSubmit}
                className="bg-white border-3 border-[#315A4D] p-2 md:p-3 rounded-3xl shadow-[5px_5px_0px_#315A4D] flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 max-w-xl"
              >
                <div className="flex items-center gap-2 px-3 border-b sm:border-b-0 sm:border-r-2 border-[#315A4D]/25 pb-2 sm:pb-0">
                  <MapPin className="w-5 h-5 text-[#E97856] shrink-0" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="bg-transparent text-sm font-bold text-[#173F35] focus:outline-none cursor-pointer"
                  >
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Pune">Pune</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                </div>

                <div className="flex-1 flex items-center gap-2 px-3 py-1">
                  <Search className="w-5 h-5 text-[#52675D]/60 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search vet, boarding, X-ray, rescue..."
                    className="w-full bg-transparent text-sm font-semibold text-[#173F35] placeholder:text-[#52675D]/60 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="playful-btn bg-[#E97856] hover:bg-[#D86341] text-white border-2 border-[#315A4D] text-sm py-2.5 px-6 whitespace-nowrap font-black shadow-[2px_2px_0px_#315A4D]"
                >
                  Find Care
                </button>
              </form>

              {/* Direct CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/services?category=Veterinary+Care"
                  className="playful-btn bg-[#F2BE55] hover:bg-[#e0ac42] text-[#173F35] border-2 border-[#315A4D] text-sm md:text-base font-extrabold flex items-center gap-2 shadow-[3px_3px_0px_#315A4D]"
                >
                  <PawPrint className="w-4 h-4" />
                  <span>Find a Vet</span>
                </Link>

                <Link
                  to="/services"
                  className="playful-btn bg-white hover:bg-[#D9E6D2] text-[#173F35] border-2 border-[#315A4D] text-sm md:text-base font-extrabold flex items-center gap-2 shadow-[3px_3px_0px_#315A4D]"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/emergency"
                  className="playful-btn bg-[#E97856] hover:bg-[#D86341] text-white border-2 border-[#315A4D] text-sm md:text-base font-extrabold flex items-center gap-2 shadow-[3px_3px_0px_#315A4D]"
                >
                  <Activity className="w-4 h-4 animate-bounce" />
                  <span>Emergency Assistance</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs md:text-sm font-bold text-[#52675D]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#173F35]" /> 100% Verified Clinicians
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#173F35]" /> 24/7 Critical Hospital Map
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#173F35]" /> Dedicated Welfare & Rescue
                </span>
              </div>

            </div>

            {/* Right Hero Custom Art Asset */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none">
                
                {/* Decorative border frame */}
                <div className="rounded-3xl border-3 border-[#315A4D] overflow-hidden bg-[#D9E6D2] shadow-[8px_8px_0px_#315A4D] p-3 group">
                  <img
                    src={illustrations.hero}
                    alt="Animal care playful editorial illustration"
                    className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Floating Mini Ribbon */}
                  <div className="mt-3 bg-white border-2 border-[#315A4D] rounded-xl p-3 flex items-center justify-between shadow-[2px_2px_0px_#315A4D]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#D9E6D2] border border-[#315A4D] flex items-center justify-center">
                        <Award className="w-4 h-4 text-[#173F35]" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#173F35]">Compassionate Vets</p>
                        <p className="text-[10px] text-[#52675D] font-semibold">Fear-Free Handling Certified</p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-[#173F35] bg-[#F2BE55] px-2.5 py-1 rounded-full border border-[#315A4D]">
                      ★ 4.9 Rating
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Real Pet / Rescue Patient Carousel */}
          <div className="pt-4">
            <div className="text-center mb-6">
              <span className="soft-tag bg-[#F2BE55] text-xs font-black uppercase tracking-wider mb-2 text-[#173F35]">
                Real Patient Stories & Rescues
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#173F35]">
                Happy Tails From Our Verified Care Network
              </h2>
            </div>
            <PetCarousel />
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. EXPLORE SERVICES (Sage Green Section Background)      */}
      {/* ======================================================== */}
      <section className="bg-[#D9E6D2]/60 border-y-2 border-[#315A4D] py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFF5E8] border-2 border-[#315A4D] px-3 py-1 rounded-full text-xs font-black text-[#173F35] mb-2 shadow-[1px_1px_0px_#315A4D]">
                <Sparkles className="w-3.5 h-3.5 text-[#E97856]" />
                Explore Every Need
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#173F35]">
                Comprehensive Animal Healthcare Services
              </h2>
              <p className="text-sm sm:text-base text-[#52675D] font-medium max-w-xl mt-1">
                From routine pediatric shots to emergency midnight ambulances, find the right professional in minutes.
              </p>
            </div>

            <Link
              to="/services"
              className="playful-btn bg-white hover:bg-[#FFF5E8] text-[#173F35] border-2 border-[#315A4D] text-sm shrink-0"
            >
              View All Categories →
            </Link>
          </div>

          {/* 6 Grid Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesList.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                tag={service.tag}
                description={service.description}
                image={service.image}
                linkTo={service.linkTo}
                bgColor={service.bgColor}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. WHY CHOOSE US (Alternating Warm Ivory Background)      */}
      {/* ======================================================== */}
      <section className="py-12 px-4 lg:px-8 bg-[#FFF5E8]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="soft-tag bg-[#D9E6D2] text-xs font-black uppercase tracking-wider mb-2 text-[#173F35]">
              Why Pet Parents Trust Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#173F35] mt-2">
              Built by Animal Lovers, Driven by Veterinary Science
            </h2>
            <p className="text-sm sm:text-base text-[#52675D] font-medium mt-2">
              Because finding reliable care for your four-legged companion shouldn't feel stressful or complicated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white border-2 border-[#315A4D] rounded-2xl p-6 shadow-[4px_4px_0px_#315A4D] relative group hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#D9E6D2] border-2 border-[#315A4D] flex items-center justify-center mb-4 shadow-[2px_2px_0px_#315A4D]">
                <ShieldCheck className="w-6 h-6 text-[#173F35]" />
              </div>
              <h3 className="font-extrabold text-xl text-[#173F35] mb-2">
                100% Vetted & Verified
              </h3>
              <p className="text-sm text-[#52675D] font-medium leading-relaxed">
                Every veterinary practitioner, clinic license, and boarding resort is individually authenticated before listing on Practo for Animals.
              </p>
            </div>

            <div className="bg-white border-2 border-[#315A4D] rounded-2xl p-6 shadow-[4px_4px_0px_#315A4D] relative group hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#F2BE55] border-2 border-[#315A4D] flex items-center justify-center mb-4 shadow-[2px_2px_0px_#315A4D]">
                <Clock className="w-6 h-6 text-[#173F35]" />
              </div>
              <h3 className="font-extrabold text-xl text-[#173F35] mb-2">
                24/7 Emergency Assistance
              </h3>
              <p className="text-sm text-[#52675D] font-medium leading-relaxed">
                Instant access to round-the-clock emergency hospital ICUs, mobile oxygen transit, and poison triage instructions when seconds count.
              </p>
            </div>

            <div className="bg-white border-2 border-[#315A4D] rounded-2xl p-6 shadow-[4px_4px_0px_#315A4D] relative group hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#E97856] text-white border-2 border-[#315A4D] flex items-center justify-center mb-4 shadow-[2px_2px_0px_#315A4D]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-[#173F35] mb-2">
                Animal Welfare First
              </h3>
              <p className="text-sm text-[#52675D] font-medium leading-relaxed">
                Direct integration with registered NGOs for street animal rescues, community sterilization (ABC), ethical adoptions, and volunteer drives.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. ANIMAL WELFARE & ADOPTION SHOWCASE (Sage & Coral)      */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="bg-[#D9E6D2] border-3 border-[#315A4D] rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_#315A4D]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#FFF5E8] border-2 border-[#315A4D] px-3.5 py-1 rounded-full text-xs font-black text-[#173F35] shadow-[1px_1px_0px_#315A4D]">
                <Heart className="w-3.5 h-3.5 text-[#E97856] fill-[#E97856]" />
                Adopt Don’t Shop • Shelter Love
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#173F35] leading-tight">
                Give an Abandoned or Rescued Soul a Forever Warm Home.
              </h2>

              <p className="text-sm sm:text-base text-[#203B34] font-medium leading-relaxed">
                Hundreds of courageous rescues, indie pups, and gentle senior cats are waiting for a kind family. Every adoption creates room for an NGO to rescue another life in distress.
              </p>

              {/* Sample adoption previews */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {mockAdoptions.slice(0, 2).map((pet) => (
                  <div key={pet.id} className="bg-white border-2 border-[#315A4D] p-3 rounded-2xl shadow-[2px_2px_0px_#315A4D] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-base text-[#173F35]">{pet.name}</span>
                        <span className="text-[10px] font-black bg-[#F2BE55] text-[#173F35] px-2 py-0.5 rounded-full border border-[#315A4D]">
                          {pet.age}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-[#E97856]">{pet.type}</p>
                      <p className="text-xs text-[#52675D] line-clamp-2 mt-1">"{pet.story}"</p>
                    </div>
                    <Link
                      to="/ngos"
                      className="text-xs font-extrabold text-[#173F35] hover:text-[#E97856] hover:underline mt-2 flex items-center gap-1"
                    >
                      Read full profile & adopt →
                    </Link>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/ngos"
                  className="playful-btn bg-[#173F35] text-white hover:bg-[#20493E] text-sm"
                >
                  Explore All Adoptions & NGOs
                </Link>

                <Link
                  to="/ngos#volunteer"
                  className="playful-btn bg-white hover:bg-[#FFF5E8] text-[#173F35] border-2 border-[#315A4D] text-sm"
                >
                  Volunteer / Foster
                </Link>
              </div>

            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border-3 border-[#315A4D] overflow-hidden shadow-[4px_4px_0px_#315A4D] bg-white p-2">
                <img
                  src={illustrations.welfareBanner}
                  alt="Animal welfare illustration"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 5. EMERGENCY QUICK ACTION BANNER (Strong Coral Red)       */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-[#E97856] text-white border-3 border-[#315A4D] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#315A4D] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-white text-[#E97856] px-3 py-1 rounded-full text-xs font-black border border-[#315A4D]">
              <AlertCircle className="w-3.5 h-3.5" />
              Veterinary Emergency or Accident?
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Don’t panic. We will connect you to nearest 24/7 care.
            </h3>
            <p className="text-white/95 text-sm font-medium max-w-xl">
              Access emergency hotline numbers, nearby emergency trauma clinics, oxygen ambulances, and instant triage first-aid guides.
            </p>
          </div>

          <Link
            to="/emergency"
            className="playful-btn bg-white text-[#173F35] hover:bg-[#FFF5E8] border-2 border-[#315A4D] text-base px-6 py-3 shrink-0 font-black shadow-[3px_3px_0px_#315A4D]"
          >
            Open 24/7 Emergency Center →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
