import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/rf-logo.svg';

const NavbarComp = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState({ fullName: '', email: '' });
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current &&!dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token is stored in localStorage
          }
        });
        const data = await response.json();
        console.log('User Data:', data);  
        setUser({ fullName: data.nama, email: data.email });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/masuk';
  };

  return (
    <nav className={`fixed top-0 w-full p-4 transition-all duration-300 z-50 ${scrolled ? 'bg-[#eaeaea] shadow-xl' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <div className="flex items-center text-lg space-x-8">
          <Link to="/beranda" className="text-var(--color-primary) hover:text-[#9290c3] transition duration-300">Beranda</Link>
          <Link to="/fitur" className="text-var(--color-primary) hover:text-[#9290c3] transition duration-300">Sewa Alat</Link>
          <Link to="/tentang" className="text-var(--color-primary) hover:text-[#9290c3] transition duration-300">Tentang</Link>
          <div className="relative" ref={dropdownRef}>
            <FontAwesomeIcon icon={faUserCircle} className="text-4xl cursor-pointer" onClick={handleProfileClick} />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-medium">{user.fullName}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded-b-md"
                >
                  Keluar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;