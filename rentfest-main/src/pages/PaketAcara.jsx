import React from "react";
import { useNavigate } from "react-router-dom";
import kesenianImage from "../assets/images/kesenian.jpg"; 
import konserImage from "../assets/images/konser.jpg";

const PaketAcara = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1b1a55]">Bingung mau sewa apa?</h1>
          <p className="text-lg pt-4 text-gray-700">Coba sesuaikan kebutuhanmu lewat paket ini</p>
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
          <div
            className="border rounded-lg p-6 flex flex-col items-center cursor-pointer shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 bg-white"
            onClick={() => navigate("/fitur")}
          >
            <div className="w-full h-48 mb-4 overflow-hidden flex items-center justify-center">
              <img src={kesenianImage} alt="Perpisahan" className="object-cover w-full h-full rounded-lg" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1b1a55] mb-4">Acara Kesenian</h3>
            <p className="text-center text-gray-600 mb-4">
              Alat yang termasuk dalam Paket Acara Kesenian:
              <ul className="list-disc list-inside mt-2 text-left">
                <li>Peralatan Audio Profesional: Speaker, Mixer</li>
                <li>Panggung Ukuran Large</li>
                <li>Peralatan Pencahayaan Panggung: Lampu, Strobo</li>
                <li>Perlengkapan Tambahan: Mikrofon, Kabel</li>
              </ul>
            </p>
            <button className="bg-[#9290c3] text-white py-2 px-6 rounded transition duration-300 transform hover:bg-[#1b1a55] hover:scale-105">
              Ayo Cari!
            </button>
          </div>
          <div
            className="border rounded-lg p-6 flex flex-col items-center cursor-pointer shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 bg-white"
            onClick={() => navigate("/fitur")}
          >
            <div className="w-full h-48 mb-4 overflow-hidden flex items-center justify-center">
              <img src={konserImage} alt="Konser" className="object-cover w-full h-full rounded-lg" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1b1a55] mb-4">Konser</h3>
            <p className="text-center text-gray-600 mb-4">
              Alat yang termasuk dalam Paket Konser:
              <ul className="list-disc list-inside mt-2 text-left">
                <li>Peralatan Audio Profesional: Speaker, Mixer</li>
                <li>Panggung Ukuran Large</li>
                <li>Peralatan Pencahayaan Panggung: Lampu, Strobo</li>
                <li>Perlengkapan Tambahan: Mikrofon, Kabel</li>
              </ul>
            </p>
            <button className="bg-[#9290c3] text-white py-2 px-6 rounded transition duration-300 transform hover:bg-[#1b1a55] hover:scale-105">
              Ayo Cari!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaketAcara;
