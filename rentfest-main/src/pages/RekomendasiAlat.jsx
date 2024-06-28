import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import produk1 from "../assets/images/fitur/produk1.png";
import produk2 from "../assets/images/fitur/produk2.png";
import produk3 from "../assets/images/fitur/produk3.png";
import produk4 from "../assets/images/fitur/produk4.png";
import produk5 from "../assets/images/fitur/produk5.png";
import produk6 from "../assets/images/fitur/produk6.png";
import produk7 from "../assets/images/fitur/produk7.png";

const productData = [
  {
    id: 1,
    images: [produk1, produk1, produk1],
    name: "Wireless Headphones",
    price: "100000",
  },
  {
    id: 2,
    images: [produk2, produk2, produk2],
    name: "Sony Camera",
    price: "190000",
  },
  {
    id: 3,
    images: [produk3, produk3, produk3],
    name: "Noise Cancelling Headphones",
    price: "150000",
  },
  {
    id: 4,
    images: [produk4, produk4, produk4],
    name: "SoundCard",
    price: "200000",
  },
  {
    id: 5,
    images: [produk5, produk5, produk5],
    name: "Logitech Gaming Speaker",
    price: "120000",
  },
  {
    id: 6,
    images: [produk6, produk6, produk6],
    name: "Speaker Bluetooth",
    price: "50000",
  },
  {
    id: 7,
    images: [produk7, produk7, produk7],
    name: "Bluetooth Speaker",
    price: "250000",
  },
  {
    id: 8,
    images: [produk3, produk3, produk3],
    name: "Action Camera",
    price: "250000",
  },
  {
    id: 9,
    images: [produk3, produk3, produk3],
    name: "VR Headset",
    price: "250000",
  },
  {
    id: 10,
    images: [produk3, produk3, produk3],
    name: "Fitness Tracker",
    price: "250000",
  },
  {
    id: 11,
    images: [produk3, produk3, produk3],
    name: "Smart Home Hub",
    price: "300000",
  },
];

const toolOptions = [
  "Wireless Headphones",
  "Sony Camera",
  "Noise Cancelling Headphones",
  "SoundCard",
  "Logitech Gaming Speaker",
  "Speaker Bluetooth",
  "Bluetooth Speaker",
  "Action Camera",
  "VR Headset",
  "Fitness Tracker",
  "Smart Home Hub",
];

const Rekomendasi = () => {
  const [minDana, setMinDana] = useState("");
  const [maxDana, setMaxDana] = useState("");
  const [alat, setAlat] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const filtered = productData.filter((item) => {
      const price = parseInt(item.price);
      const minPrice = parseInt(minDana.replace(/\D/g, "")) || 0;
      const maxPrice = parseInt(maxDana.replace(/\D/g, "")) || Infinity;
      return (
        price >= minPrice &&
        price <= maxPrice &&
        (!alat || item.name.toLowerCase().includes(alat.toLowerCase()))
      );
    });
    setFilteredProducts(filtered);
  };

  const handleSewaSekarang = (id) => {
    navigate(`/deskripsi/${id}`);
  };

  const handleKembali = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full lg:w-1/3 p-6 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#1b1a55]">
          Rekomendasi Alat
        </h2>
        <p className="text-center text-gray-600">
          Daripada bingung cari alatnya, mending sini kita bantu untuk mencari alat yang cocok dengan acaramu.
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="minDana" className="block text-gray-600">
            Dana Minimum
          </label>
          <input
            id="minDana"
            name="minDana"
            type="text"
            placeholder="Misalnya : 100000"
            value={minDana}
            onChange={(e) => setMinDana(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
          />
          <label htmlFor="maxDana" className="block text-gray-600">
            Dana Maksimum
          </label>
          <input
            id="maxDana"
            name="maxDana"
            type="text"
            placeholder="Misalnya : 300000"
            value={maxDana}
            onChange={(e) => setMaxDana(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
          />
          <label htmlFor="alat" className="block text-gray-600">
            Alat Yang Dibutuhkan
          </label>
          <select
            id="alat"
            name="alat"
            value={alat}
            onChange={(e) => setAlat(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#1b1a55] focus:border-[#1b1a55]"
          >
            <option value="" disabled>
              Pilih alat
            </option>
            {toolOptions.map((tool, index) => (
              <option key={index} value={tool}>
                {tool}
              </option>
            ))}
          </select>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 duration-300"
              onClick={handleKembali}
            >
              Kembali
            </button>
            <button className="bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300">
              Cari Rekomendasi
            </button>
          </div>
        </form>

        {filteredProducts.length > 0 ? (
          <div className="mt-8 overflow-y-auto" style={{ maxHeight: "50vh" }}>
            <h3 className="text-xl font-bold text-center text-[#1b1a55]">
              Hasil Pencarian
            </h3>
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-md"
                >
                  <div className="w-full md:w-1/2 pr-6">
                    <Carousel
                      showThumbs={false}
                      showStatus={false}
                      className="bg-[#252525] rounded-lg p-4"
                    >
                      {product.images.map((image, index) => (
                        <div
                        key={index}
                        className="flex justify-center items-center"
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="rounded-lg"
                        />
                      </div>
                      ))}
                    </Carousel>
                  </div>
                  <div className="w-full md:w-1/2 pl-6 mt-4 md:mt-0">
                    <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                    <p className="text-lg mb-2">
                      Rp. {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </p>
                    <p className="text-base mb-2">{product.description}</p>
                    <button
                      className="bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300"
                      onClick={() => handleSewaSekarang(product.id)}
                    >
                      Sewa Sekarang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 text-center text-red-700">
            Alat tidak ditemukan
          </div>
        )}
      </div>
    </div>
  );
};

export default Rekomendasi;