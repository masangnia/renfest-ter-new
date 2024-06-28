import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaPhone, FaEnvelope, FaLock } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import masukdandaftar from '../assets/images/masukdandaftar.webp';

const Daftar = () => {
  const [formData, setFormData] = useState({
    nama: '',
    telepon: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      console.log(data);
      toast.success('Registrasi Berhasil', {
        onClose: () => navigate('/masuk'),
        autoClose: 3000
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ToastContainer />
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg">
        <div className="relative hidden w-1/2 bg-cover rounded-l-2xl lg:block" style={{ backgroundImage: `url(${masukdandaftar})` }}>
        </div>
        <div className="w-full lg:w-1/2 p-6 space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Daftar Akun Baru</h2>
          <p className="text-center text-gray-600">Silakan isi formulir di bawah ini untuk membuat akun baru.</p>
          <form className="flex flex-col gap-3 mt-6" onSubmit={handleSubmit}>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="nama"
                name="nama"
                type="text"
                placeholder="Nama Lengkap"
                required
                className="w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus"value={formData.nama}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="telepon"
                name="telepon"
                type="tel"
                placeholder="Telepon"
                required
                className="w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
                value={formData.telepon}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                className="w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg text-white bg-[#1b1a55] rounded-md hover:bg-[#9290c3] focus:outline-none focus:ring-2 focus:ring-[#1b1a55] focus:ring-offset-2 duration-300"
            >
              Daftar
            </button>
          </form>
          <p className="text-md text-center text-gray-600">
            Sudah memiliki akun? <Link to="/masuk" className="font-medium text-[#1b1a55] hover:text-[#9290c3] duration-300">
            Masuk
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Daftar;