import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';
import Beranda from './pages/Beranda';
import Tentang from './pages/Tentang';
import Fitur from './pages/Fitur';
import Masuk from './pages/Masuk';
import Daftar from './pages/Daftar';
import Deskripsi from './pages/Deskripsi';
import RekomendasiAlat from './pages/RekomendasiAlat';
import PaketAcara from './pages/PaketAcara';
import SewaAlat from './pages/SewaAlat';

const App = () => {
  const location = useLocation();
  const masukPage = location.pathname === '/masuk';
  const daftarPage = location.pathname === '/daftar';

  return (
    <div className="flex flex-col min-h-screen">
      {!masukPage && !daftarPage && <NavbarComp />}
      <div className={`flex-grow ${!masukPage && !daftarPage ? '' : 'mt-0'}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/masuk" />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/deskripsi/:id" element={<Deskripsi />} />
          <Route path="/rekomendasialat" element={<RekomendasiAlat />} />
          <Route path="/paketacara" element={<PaketAcara />} />
          <Route path="/sewaalat" element={<SewaAlat />} />
        </Routes>
      </div>
      {!masukPage && !daftarPage && <FooterComp />}
    </div>
  );
};

export default App;
