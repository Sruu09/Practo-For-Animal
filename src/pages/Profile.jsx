import React, { useState } from 'react';
import { 
  User, 
  PawPrint, 
  Calendar, 
  Bookmark, 
  Plus, 
  Trash2, 
  Edit3, 
  MapPin, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockProviders } from '../data/mockData';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { 
    userProfile, 
    setUserProfile, 
    pets, 
    addPet, 
    removePet, 
    bookings, 
    cancelBooking,
    savedProviderIds,
    toggleSaveProvider
  } = useApp();

  const [activeTab, setActiveTab] = useState('pets');
  
  // Add Pet Form state
  const [showAddPetModal, setShowAddPetModal] = useState(false);
  const [newPetName, setNewPetName] = useState('');
  const [newPetType, setNewPetType] = useState('Dog');
  const [newPetBreed, setNewPetBreed] = useState('');
  const [newPetAge, setNewPetAge] = useState('');
  const [newPetGender, setNewPetGender] = useState('Male');
  const [newPetWeight, setNewPetWeight] = useState('');
  const [newPetVaccine, setNewPetVaccine] = useState('Up to Date');
  const [newPetNotes, setNewPetNotes] = useState('');

  // Edit user personal details state
  const [editingUser, setEditingUser] = useState(false);
  const [userForm, setUserForm] = useState({ ...userProfile });

  const handleUserSave = (e) => {
    e.preventDefault();
    setUserProfile(userForm);
    setEditingUser(false);
  };

  const handleAddPetSubmit = (e) => {
    e.preventDefault();
    if (!newPetName.trim()) return;
    addPet({
      name: newPetName,
      type: newPetType,
      breed: newPetBreed || 'Indie Companion',
      age: newPetAge || '1 yr',
      gender: newPetGender,
      weight: newPetWeight || '10 kg',
      vaccinationStatus: newPetVaccine,
      nextVaccineDue: 'In 6 Months',
      allergies: 'None recorded',
      microchipped: true,
      notes: newPetNotes || 'Loves belly rubs.'
    });
    setNewPetName('');
    setNewPetBreed('');
    setNewPetAge('');
    setNewPetNotes('');
    setShowAddPetModal(false);
  };

  const savedProviders = mockProviders.filter(p => savedProviderIds.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8 bg-[#FFF5E8]">
      
      {/* User Overview Header Banner */}
      <div className="bg-white border-3 border-[#315A4D] rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_#315A4D]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#F2BE55] border-2 border-[#315A4D] flex items-center justify-center text-2xl shadow-[3px_3px_0px_#315A4D]">
              🐕
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-[#173F35]">
                  {userProfile.name}
                </h1>
                <span className="soft-tag bg-[#D9E6D2] text-[10px] font-bold text-[#173F35]">
                  Verified Pet Parent
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#52675D] font-semibold mt-0.5">
                {userProfile.email} • {userProfile.phone}
              </p>
              <p className="text-xs text-[#52675D] flex items-center gap-1 mt-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#E97856]" /> {userProfile.address}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setUserForm({ ...userProfile });
                setEditingUser(!editingUser);
              }}
              className="playful-btn bg-[#FFF5E8] hover:bg-[#D9E6D2] text-[#173F35] border-2 border-[#315A4D] text-xs font-bold py-2 px-4 flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{editingUser ? 'Cancel Edit' : 'Edit Profile'}</span>
            </button>
          </div>

        </div>

        {/* Inline User Profile Edit Form */}
        {editingUser && (
          <form onSubmit={handleUserSave} className="mt-6 pt-6 border-t-2 border-[#315A4D]/20 space-y-4">
            <h3 className="text-base font-black text-[#173F35]">Update Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-black text-[#173F35] block mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={userForm.name} 
                  onChange={(e) => setUserForm({...userForm, name: e.target.value})}
                  className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-bold text-[#173F35]"
                />
              </div>
              <div>
                <label className="text-xs font-black text-[#173F35] block mb-1">Contact Phone</label>
                <input 
                  type="text" 
                  value={userForm.phone} 
                  onChange={(e) => setUserForm({...userForm, phone: e.target.value})}
                  className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-bold text-[#173F35]"
                />
              </div>
              <div>
                <label className="text-xs font-black text-[#173F35] block mb-1">Emergency ICE Contact</label>
                <input 
                  type="text" 
                  value={userForm.emergencyContact} 
                  onChange={(e) => setUserForm({...userForm, emergencyContact: e.target.value})}
                  className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-bold text-[#173F35]"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-black text-[#173F35] block mb-1">Residential Address</label>
              <input 
                type="text" 
                value={userForm.address} 
                onChange={(e) => setUserForm({...userForm, address: e.target.value})}
                className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-bold text-[#173F35]"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setEditingUser(false)} className="playful-btn bg-white text-xs border-2 border-[#315A4D]">Cancel</button>
              <button type="submit" className="playful-btn bg-[#E97856] text-white text-xs font-bold border-2 border-[#315A4D]">Save Changes</button>
            </div>
          </form>
        )}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveTab('pets')}
          className={`playful-btn text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer border-2 border-[#315A4D] ${
            activeTab === 'pets' ? 'bg-[#173F35] text-white' : 'bg-white text-[#173F35] hover:bg-[#D9E6D2]'
          }`}
        >
          <PawPrint className="w-4 h-4" />
          <span>My Pets ({pets.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('bookings')}
          className={`playful-btn text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer border-2 border-[#315A4D] ${
            activeTab === 'bookings' ? 'bg-[#173F35] text-white' : 'bg-white text-[#173F35] hover:bg-[#D9E6D2]'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Appointments ({bookings.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('saved')}
          className={`playful-btn text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer border-2 border-[#315A4D] ${
            activeTab === 'saved' ? 'bg-[#173F35] text-white' : 'bg-white text-[#173F35] hover:bg-[#D9E6D2]'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>Saved Providers ({savedProviders.length})</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: PET PROFILES & HEALTH MANAGEMENT                  */}
      {/* ======================================================== */}
      {activeTab === 'pets' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-[#173F35]">
                Your Registered Pets
              </h2>
              <p className="text-xs sm:text-sm text-[#52675D] font-medium">
                Store medical histories, vaccination due dates, and diet allergies for fast clinic check-ins.
              </p>
            </div>

            <button
              onClick={() => setShowAddPetModal(true)}
              className="playful-btn bg-[#E97856] hover:bg-[#D86341] text-white border-2 border-[#315A4D] text-xs sm:text-sm font-black flex items-center gap-1.5 shadow-[2px_2px_0px_#315A4D]"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Pet</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pets.map((pet) => (
              <div 
                key={pet.id}
                className="playful-card p-6 flex flex-col justify-between bg-white border-2 border-[#315A4D] shadow-[4px_4px_0px_#315A4D]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="soft-tag bg-[#D9E6D2] text-xs font-black text-[#173F35]">
                      {pet.type}
                    </span>
                    <button
                      onClick={() => {
                        if (confirm(`Remove ${pet.name}'s profile?`)) {
                          removePet(pet.id);
                        }
                      }}
                      className="text-[#52675D]/50 hover:text-[#E97856] p-1 transition-colors cursor-pointer"
                      title="Remove Pet"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF5E8] border-2 border-[#315A4D] flex items-center justify-center text-xl shadow-[1px_1px_0px_#315A4D]">
                      {pet.type === 'Cat' ? '🐱' : '🐶'}
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-[#173F35]">{pet.name}</h3>
                      <p className="text-xs font-bold text-[#E97856]">{pet.breed} • {pet.gender} • {pet.age}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold mb-3">
                    <div className="bg-[#FFF5E8]/60 p-2.5 rounded-xl border border-[#315A4D]/20">
                      <span className="text-[10px] font-bold text-[#52675D] block uppercase">Weight</span>
                      <span className="font-extrabold text-[#173F35]">{pet.weight}</span>
                    </div>
                    <div className="bg-[#D9E6D2] p-2.5 rounded-xl border border-[#315A4D]/20">
                      <span className="text-[10px] font-bold text-[#52675D] block uppercase">Vaccination</span>
                      <span className="font-extrabold text-[#173F35]">{pet.vaccinationStatus}</span>
                    </div>
                  </div>

                  <div className="bg-[#FFF5E8] p-3 rounded-xl border border-[#315A4D]/30 text-xs space-y-1 mb-2">
                    <p className="font-extrabold text-[#173F35]">Next Booster Vaccine Due:</p>
                    <p className="text-[#E97856] font-black">{pet.nextVaccineDue}</p>
                  </div>

                  <p className="text-xs text-[#203B34] font-medium">
                    <strong>Medical Notes:</strong> {pet.notes}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t-2 border-[#315A4D]/20 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#173F35] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#173F35]" /> Microchipped
                  </span>

                  <Link
                    to={`/services?category=Veterinary+Care`}
                    className="playful-btn bg-[#FFF5E8] hover:bg-[#D9E6D2] text-[#173F35] border-2 border-[#315A4D] text-xs py-1.5 px-3"
                  >
                    Book Checkup →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: APPOINTMENTS & BOOKING HISTORY                    */}
      {/* ======================================================== */}
      {activeTab === 'bookings' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-[#173F35]">
                Your Appointments & Visits
              </h2>
              <p className="text-xs sm:text-sm text-[#52675D] font-medium">
                Track upcoming clinic consultations, daycare reservations, and past visits.
              </p>
            </div>

            <Link
              to="/services"
              className="playful-btn bg-[#E97856] hover:bg-[#D86341] text-white border-2 border-[#315A4D] text-xs sm:text-sm font-bold shadow-[2px_2px_0px_#315A4D]"
            >
              Book New Appointment
            </Link>
          </div>

          {bookings.length === 0 ? (
            <div className="bg-white border-2 border-[#315A4D] p-8 rounded-2xl text-center">
              <p className="text-sm font-bold text-[#52675D]">No bookings yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((b) => (
                <div 
                  key={b.id}
                  className="bg-white border-2 border-[#315A4D] rounded-2xl p-5 shadow-[3px_3px_0px_#315A4D] flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="soft-tag bg-[#D9E6D2] text-[10px] font-black text-[#173F35]">
                        Ref: {b.id}
                      </span>
                      <span className={`soft-tag text-[10px] font-black ${
                        b.status === 'Confirmed' ? 'bg-[#D9E6D2] text-[#173F35]' : 
                        b.status === 'Completed' ? 'bg-[#FFF5E8] text-[#173F35]' : 'bg-[#FFF5E8] text-[#E97856] border-[#E97856]'
                      }`}>
                        {b.status}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base md:text-lg text-[#173F35]">
                      {b.providerName}
                    </h3>
                    <p className="text-xs font-bold text-[#E97856]">
                      Procedure: {b.serviceType} • Pet: <strong className="text-[#173F35]">{b.petName}</strong>
                    </p>
                    <p className="text-xs text-[#52675D] font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#173F35]" /> Date: {b.date} at {b.timeSlot} • Fee: {b.fee} ({b.paymentMethod})
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {b.status === 'Confirmed' && (
                      <button
                        onClick={() => {
                          if (confirm(`Cancel appointment ${b.id}?`)) {
                            cancelBooking(b.id);
                          }
                        }}
                        className="playful-btn bg-white hover:bg-[#FFF5E8] text-[#E97856] border-2 border-[#315A4D] text-xs py-1.5 px-3"
                      >
                        Cancel
                      </button>
                    )}
                    <Link
                      to={`/provider/${b.providerId}`}
                      className="playful-btn bg-[#FFF5E8] text-[#173F35] border-2 border-[#315A4D] text-xs py-1.5 px-3"
                    >
                      View Provider
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: SAVED PROVIDERS                                   */}
      {/* ======================================================== */}
      {activeTab === 'saved' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-black text-[#173F35]">
              Saved Care Specialists & Clinics
            </h2>
            <p className="text-xs sm:text-sm text-[#52675D] font-medium">
              Quick access to your preferred doctors, groomers, and rescue groups.
            </p>
          </div>

          {savedProviders.length === 0 ? (
            <div className="bg-white border-2 border-[#315A4D] p-8 rounded-2xl text-center">
              <p className="text-sm font-bold text-[#52675D]">No saved providers yet.</p>
              <Link to="/services" className="playful-btn bg-[#E97856] text-white border-2 border-[#315A4D] text-xs mt-3 inline-block">
                Browse Services
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedProviders.map((p) => (
                <div key={p.id} className="playful-card p-5 flex flex-col justify-between bg-white border-2 border-[#315A4D]">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="soft-tag bg-[#D9E6D2] text-xs font-bold text-[#173F35]">{p.category}</span>
                      <button
                        onClick={() => toggleSaveProvider(p.id)}
                        className="text-xs font-bold text-[#E97856] hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>

                    <h3 className="font-extrabold text-lg text-[#173F35]">{p.name}</h3>
                    <p className="text-xs font-bold text-[#E97856]">{p.clinicName}</p>
                    <p className="text-xs text-[#52675D] mt-1">{p.location} • {p.distance}</p>
                  </div>

                  <div className="pt-3 mt-3 border-t-2 border-[#315A4D]/20 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#173F35]">{p.fee}</span>
                    <Link
                      to={`/provider/${p.id}`}
                      className="playful-btn bg-[#E97856] text-white border-2 border-[#315A4D] text-xs py-1.5 px-3"
                    >
                      Book Visit →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: ADD NEW PET                                       */}
      {/* ======================================================== */}
      {showAddPetModal && (
        <div className="fixed inset-0 z-50 bg-[#173F35]/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border-3 border-[#315A4D] rounded-3xl max-w-lg w-full p-6 shadow-[8px_8px_0px_#315A4D] relative animate-in fade-in zoom-in-95 duration-200">
            
            <form onSubmit={handleAddPetSubmit} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b-2 border-[#315A4D]/20">
                <h3 className="text-xl font-black text-[#173F35]">Add Pet Profile</h3>
                <button
                  type="button"
                  onClick={() => setShowAddPetModal(false)}
                  className="w-8 h-8 rounded-full border border-[#315A4D] bg-[#FFF5E8] text-xs font-black text-[#173F35] hover:bg-[#E97856] hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-black text-[#173F35] block mb-1">Pet Name *</label>
                  <input
                    type="text"
                    required
                    value={newPetName}
                    onChange={(e) => setNewPetName(e.target.value)}
                    placeholder="e.g. Simba"
                    className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-bold text-[#173F35] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-[#173F35] block mb-1">Pet Type</label>
                  <select
                    value={newPetType}
                    onChange={(e) => setNewPetType(e.target.value)}
                    className="w-full bg-[#D9E6D2] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-bold text-[#173F35] focus:outline-none cursor-pointer"
                  >
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Rabbit">Rabbit</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-black text-[#173F35] block mb-1">Breed</label>
                  <input
                    type="text"
                    value={newPetBreed}
                    onChange={(e) => setNewPetBreed(e.target.value)}
                    placeholder="e.g. Indie / Beagle"
                    className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-bold text-[#173F35]"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-[#173F35] block mb-1">Age</label>
                  <input
                    type="text"
                    value={newPetAge}
                    onChange={(e) => setNewPetAge(e.target.value)}
                    placeholder="e.g. 2 yrs"
                    className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-bold text-[#173F35]"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-[#173F35] block mb-1">Weight</label>
                  <input
                    type="text"
                    value={newPetWeight}
                    onChange={(e) => setNewPetWeight(e.target.value)}
                    placeholder="e.g. 15 kg"
                    className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-bold text-[#173F35]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-[#173F35] block mb-1">Temperament / Special Instructions</label>
                <textarea
                  value={newPetNotes}
                  onChange={(e) => setNewPetNotes(e.target.value)}
                  placeholder="e.g. Friendly with cats, gets nervous around loud vacuum cleaners."
                  rows={2}
                  className="w-full bg-[#FFF5E8] border-2 border-[#315A4D] rounded-xl px-3 py-2 text-xs font-medium text-[#173F35] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddPetModal(false)}
                  className="playful-btn bg-white text-[#173F35] border-2 border-[#315A4D] text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="playful-btn bg-[#E97856] text-white border-2 border-[#315A4D] text-xs font-black px-5 shadow-[2px_2px_0px_#315A4D]"
                >
                  Save Pet Profile
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;
