import React from 'react';
import { FaSquareInstagram, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const FooterComp = () => {
  return (
    <div>
      <footer className="w-full py-4 bg-[#252525] text-white text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.instagram.com/d.i.afdallah" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaSquareInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/DaffaIkhsanAfdallah.5" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaSquareFacebook size={24} />
          </a>
          <a href="https://x.com/elonmusk" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaSquareXTwitter size={24} />
          </a>
        </div>
          <p className="text-[#a2a2a2]">Copyright &copy; 2024 RentFest. All Right Reserved.</p>
      </footer>
    </div>
  );
};

export default FooterComp;
