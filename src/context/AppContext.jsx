import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Current user mock profile
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('practo_animal_user');
    return saved ? JSON.parse(saved) : {
      name: 'Aanya Sharma',
      email: 'aanya.sharma@example.com',
      phone: '+91 98765 43210',
      city: 'Bengaluru',
      address: 'Indiranagar 12th Main, Bengaluru',
      emergencyContact: '+91 98111 22233'
    };
  });

  // User pets
  const [pets, setPets] = useState(() => {
    const saved = localStorage.getItem('practo_animal_pets');
    return saved ? JSON.parse(saved) : [
      {
        id: 'pet-1',
        name: 'Milo',
        type: 'Dog',
        breed: 'Golden Retriever',
        age: '3 yrs',
        gender: 'Male',
        weight: '28 kg',
        vaccinationStatus: 'Up to Date',
        nextVaccineDue: '15 Dec 2026',
        allergies: 'Chicken protein, pollen',
        microchipped: true,
        notes: 'Very friendly with children, gets anxious during thunderstorms.'
      },
      {
        id: 'pet-2',
        name: 'Luna',
        type: 'Cat',
        breed: 'Calico Indie',
        age: '1.5 yrs',
        gender: 'Female',
        weight: '4.2 kg',
        vaccinationStatus: 'Up to Date',
        nextVaccineDue: '20 Jan 2027',
        allergies: 'None recorded',
        microchipped: true,
        notes: 'Prefers quiet rooms and warm corners.'
      }
    ];
  });

  // Saved / Favorite Providers
  const [savedProviderIds, setSavedProviderIds] = useState(() => {
    const saved = localStorage.getItem('practo_animal_favs');
    return saved ? JSON.parse(saved) : ['vet-1', 'hosp-1', 'ngo-1'];
  });

  // Booked Appointments
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('practo_animal_bookings');
    return saved ? JSON.parse(saved) : [
      {
        id: 'BK-1049',
        providerId: 'vet-1',
        providerName: 'Dr. Arjun Deshmukh (TailWags Clinic)',
        serviceType: 'Routine Wellness & Vaccination',
        petName: 'Milo',
        date: '2026-11-18',
        timeSlot: '11:00 AM',
        status: 'Confirmed',
        fee: '₹750',
        paymentMethod: 'Pay at Clinic'
      },
      {
        id: 'BK-0982',
        providerId: 'board-1',
        providerName: 'Whiskers & Paws Retreat',
        serviceType: 'Weekend Boarding & Playcare',
        petName: 'Luna',
        date: '2026-10-12',
        timeSlot: 'Full Day',
        status: 'Completed',
        fee: '₹2,200',
        paymentMethod: 'Paid Online'
      }
    ];
  });

  // Active Emergency Alert status banner (if activated)
  const [emergencyBannerOpen, setEmergencyBannerOpen] = useState(false);

  // Search state across pages
  const [globalSearch, setGlobalSearch] = useState('');

  // Persist state
  useEffect(() => {
    localStorage.setItem('practo_animal_user', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('practo_animal_pets', JSON.stringify(pets));
  }, [pets]);

  useEffect(() => {
    localStorage.setItem('practo_animal_favs', JSON.stringify(savedProviderIds));
  }, [savedProviderIds]);

  useEffect(() => {
    localStorage.setItem('practo_animal_bookings', JSON.stringify(bookings));
  }, [bookings]);

  // Methods
  const toggleSaveProvider = (id) => {
    setSavedProviderIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const addPet = (newPet) => {
    const petObj = { ...newPet, id: `pet-${Date.now()}` };
    setPets(prev => [petObj, ...prev]);
  };

  const removePet = (id) => {
    setPets(prev => prev.filter(p => p.id !== id));
  };

  const addBooking = (newBooking) => {
    const bookingObj = {
      ...newBooking,
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Confirmed'
    };
    setBookings(prev => [bookingObj, ...prev]);
  };

  const cancelBooking = (id) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'Cancelled' } : b));
  };

  return (
    <AppContext.Provider value={{
      userProfile,
      setUserProfile,
      pets,
      addPet,
      removePet,
      savedProviderIds,
      toggleSaveProvider,
      bookings,
      addBooking,
      cancelBooking,
      emergencyBannerOpen,
      setEmergencyBannerOpen,
      globalSearch,
      setGlobalSearch
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
