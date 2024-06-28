import React, { useState, useEffect } from "react";
import produk1 from "../assets/images/fitur/produk1.png";
import produk2 from "../assets/images/fitur/produk2.png";
import produk3 from "../assets/images/fitur/produk3.png";
import produk4 from "../assets/images/fitur/produk4.png";
import produk5 from "../assets/images/fitur/produk5.png";
import produk6 from "../assets/images/fitur/produk6.png";
import produk7 from "../assets/images/fitur/produk7.png";
import produk8 from "../assets/images/fitur/produk8.png";
import produk9 from "../assets/images/fitur/produk9.png";
import produk10 from "../assets/images/fitur/produk10.png";
import produk11 from "../assets/images/fitur/produk11.png";
import produk12 from "../assets/images/fitur/produk12.png";
import produk13 from "../assets/images/fitur/produk13.png";
import produk14 from "../assets/images/fitur/produk14.png";
import produk15 from "../assets/images/fitur/produk15.png";
import { FiSearch, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const productData = [
  {
    id: 1,
    image: produk1,
    name: "Wireless Headphones",
    price: 100000,
  },
  { id: 2, image: produk2, name: "Sony Camera", price: 190000 },
  {
    id: 3,
    image: produk3,
    name: "Noise Cancelling Headphones",
    price: 150000,
  },
  { id: 4, image: produk4, name: "SoundCard", price: 200000 },
  {
    id: 5,
    image: produk5,
    name: "Logitech Gaming Speaker",
    price: 120000,
  },
  {
    id: 6,
    image: produk6,
    name: "Speaker Bluetooth",
    price: 50000,
  },
  {
    id: 7,
    image: produk7,
    name: "Drum Band Set",
    price: 200000,
  },
  {
    id: 8,
    image: produk8,
    name: "Lampu Sorot Panggung",
    price: 150000,
  },
  { id: 9, image: produk9, name: "Lampu Panggung", price: 100000 },
  {
    id: 10,
    image: produk10,
    name: "Lampu Sorot",
    price: 130000,
  },
  {
    id: 11,
    image: produk11,
    name: "Kursi",
    price: 80000,
  },
  {
    id: 12,
    image: produk12,
    name: "Kamera Vidio HD",
    price: 30000,
  },
  {
    id: 13,
    image: produk13,
    name: "Panggung Semi Ringing",
    price: 1500000,
  },
  {
    id: 14,
    image: produk14,
    name: "Panggung Full Ringing",
    price: 2500000,
  },
  {
    id: 15,
    image: produk15,
    name: "Panggung Lipat Portable",
    price: 1500000,
  },
];

const filters = [
  {
    category: "Kategori",
    options: [
      "Camera",
      "Aksesoris Camera",
      "Perabotan",
      "Speaker",
      "Wireless",
      "Hp",
    ],
  },
];

const Fitur = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showFullName, setShowFullName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(productData);
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const handleFilterChange = (event) => {
    if (event.target.checked) {
      setSelectedFilter(event.target.name);
    } else {
      setSelectedFilter(null);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter
      ? product.name.toLowerCase().includes(selectedFilter.toLowerCase())
      : true;
    return matchesSearchQuery && matchesFilter;
  });

const fillEmptyItems = () => {
  const emptyItems = [];
  const itemsNeeded = 8 - filteredProducts.length;
  for (let i = 0; i < itemsNeeded; i++) {
    emptyItems.push(
      <div
        key={`empty-${i}`}
        className="bg-transparent p-4 rounded-2xl"
      ></div>
    );
  }
  return emptyItems;
};

  return (
    <div className="container mx-auto my-12 p-12 ">
      <section className="my-8 text-left border-b-2 border-[#1b1a55]">
        <h2 className="text-4xl font-bold mb-4 text-[#1b1a55]">
          Temukan Beragam Alat Yang Kamu Butuhkan
        </h2>
        <p className="text-lg text-gray-600">
          Layanan fleksibel dan mudah untuk semua kebutuhan alat Anda.
        </p>
      </section>
      <div className="flex cursor-default">
        <aside className="w-1/6 mr-6 p-4 border-2 border-[#1b1a55] rounded-2xl">
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-[#1b1a55] pb-2 text-[#1b1a55]">
            Filter
          </h2>
          {filters.map((filter, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-[#1b1a55]">
                {filter.category}
              </h3>
              {filter.options.map((option, idx) => (
                <div key={idx} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    id={option}
                    name={option}
                    className="mr-2"
                    onChange={handleFilterChange}
                  />
                  <label htmlFor={option} className="text-[#1b1a55]">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </aside>
        <div className="flex flex-col flex-1">
          <div className="relative mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg shadow-lg focus-within:ring-1 focus-within:ring-[#1b1a55]">
              <div className="p-4 bg-[#1b1a55] rounded-l-lg">
                <FiSearch className="text-white" />
              </div>
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full p-3 pl-3 border-none focus:outline-none focus:ring-0 rounded-r-lg"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-0 top-0 bottom-0 flex items-center pr-3"
                >
                  <FiX className="text-gray-500" />
                </button>
              )}
            </div>
          </div>
          <main
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-default"
            style={{ minHeight: "54vh" }}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative p-4 border-2 rounded-2xl border-[#1b1a55] text-center duration-300"
                  style={{ height: "300px", transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h3 className="text-xl font-medium text-[#1b1a55]whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.name.length > 20 ? (
                      <>
                        {product.name.substring(0, 20)}
                        <button
                          onMouseEnter={() => setShowFullName(product.id)}
                          onMouseLeave={() => setShowFullName(null)}
                          className="text-[#1b1a55] underline ml-1"
                        >
                        ...
                        </button>
                        {showFullName === product.id && (
                          <div className="absolute top-0 left-0 right-0 bg-white p-4 border rounded-xl shadow-lg">
                            <div className="flex justify-center items-center">
                              <h3 className="text-lg font-normal text-[#1b1a55]">
                                {product.name}
                              </h3>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      product.name
                    )}
                  </h3>
                  <p className="text-base bg-[#9290c3] text-white">
                    {formatPrice(product.price)}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full overflow-hidden rounded-b-xl">
                  <button
                    className="w-full h-12 px-4 py-2 bg-[#1b1a55] text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    onClick={() => navigate(`/deskripsi/${product.id}`)}
                  >
                    Cek & Sewa Sekarang
                </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-red-700">
                Produk tidak ditemukan
              </p>
            )}
            {fillEmptyItems()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Fitur;