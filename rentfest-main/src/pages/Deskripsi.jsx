import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoArrowBack } from "react-icons/io5";
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

const productData = [
  { id: 1, images: [produk1], name: "Wireless Headphones", price: "100000", description: "Nikmati musik tanpa kabel dengan kualitas suara terbaik. Wireless Headphones ini menawarkan kenyamanan maksimal dengan bantalan telinga yang lembut dan daya tahan baterai yang lama. Cocok digunakan saat berolahraga maupun bersantai. Dilengkapi dengan teknologi noise-cancelling untuk pengalaman mendengarkan yang optimal. Konektivitas Bluetooth stabil untuk pengalaman audio yang mulus." },
  { id: 2, images: [produk2], name: "Sony Camera", price: "190000", description: "Kamera Sony dengan resolusi tinggi untuk momen spesial Anda. Dibekali dengan sensor canggih yang mampu menghasilkan gambar tajam dan detail. Ideal untuk fotografi profesional maupun amatir. Desain ergonomis dan ringan, memudahkan Anda membawanya ke mana saja. Fitur autofocus cepat dan presisi untuk hasil yang memukau dalam berbagai kondisi cahaya." },
  { id: 3, images: [produk3], name: "Noise Cancelling Headphones", price: "150000", description: "Headphones dengan fitur peredam bising untuk pengalaman mendengarkan yang lebih baik. Dirancang untuk mengurangi kebisingan lingkungan sehingga Anda bisa fokus pada musik atau panggilan telepon. Baterai tahan lama untuk penggunaan sepanjang hari. Kualitas suara premium dengan bass yang mendalam dan treble yang jernih. Sangat cocok untuk perjalanan, bekerja, atau sekadar bersantai." },
  { id: 4, images: [produk4], name: "SoundCard", price: "200000", description: "SoundCard berkualitas untuk pengalaman audio yang lebih jernih. Ideal untuk para penggemar musik dan profesional audio. Menawarkan berbagai pilihan konektivitas untuk berbagai perangkat. Desain kompak dan portabel memudahkan Anda membawanya ke mana saja. Dilengkapi dengan software yang user-friendly untuk pengaturan suara yang optimal." },
  { id: 5, images: [produk5], name: "Logitech Gaming Speaker", price: "120000", description: "Speaker gaming Logitech dengan suara yang menggelegar. Didesain khusus untuk memberikan pengalaman gaming yang mendalam. Dilengkapi dengan subwoofer yang kuat untuk bass yang menghentak. Koneksi mudah dengan berbagai perangkat game dan multimedia. Desain modern dan elegan cocok untuk setup gaming Anda." },
  { id: 6, images: [produk6], name: "Speaker Bluetooth", price: "50000", description: "Speaker Bluetooth portabel dengan suara jernih dan bass kuat. Cocok untuk berbagai aktivitas outdoor maupun indoor. Daya tahan baterai yang lama memastikan musik non-stop sepanjang hari. Desain tahan air membuatnya ideal untuk dibawa ke pantai atau kolam renang. Konektivitas yang mudah dengan semua perangkat Bluetooth." },
  { id: 7, images: [produk7], name: "Drum Band Set", price: "200000", description: "Set drum band lengkap untuk latihan dan pertunjukan. Dibuat dari bahan berkualitas tinggi untuk suara yang autentik. Ideal untuk pemula maupun pemain drum berpengalaman. Desain ergonomis memastikan kenyamanan saat bermain. Mudah dipasang dan dibongkar untuk mobilitas tinggi." },
  { id: 8, images: [produk8], name: "Lampu Sorot Panggung", price: "150000", description: "Lampu sorot panggung untuk penerangan maksimal di setiap acara. Dilengkapi dengan berbagai mode pencahayaan untuk efek yang dramatis. Konstruksi kokoh dan tahan lama untuk penggunaan jangka panjang. Mudah diatur dan dipasang sesuai kebutuhan acara. Ideal untuk konser, teater, dan acara lainnya." },
  { id: 9, images: [produk9], name: "Lampu Panggung", price: "100000", description: "Lampu panggung dengan cahaya terang untuk event indoor maupun outdoor. Menghadirkan pencahayaan yang merata dan jelas. Dilengkapi dengan fitur kontrol jarak jauh untuk kemudahan penggunaan. Desain modern dan efisien energi. Cocok untuk berbagai jenis acara seperti konser, pertunjukan, dan pameran." },
  { id: 10, images: [produk10], name: "Lampu Sorot", price: "130000", description: "Lampu sorot berkualitas untuk kebutuhan penerangan Anda. Dirancang untuk memberikan cahaya yang kuat dan fokus. Ideal untuk penggunaan di area luar ruangan maupun dalam ruangan. Tahan cuaca dan awet untuk penggunaan jangka panjang. Fitur instalasi yang mudah dan cepat." },
  { id: 11, images: [produk11], name: "Kursi", price: "80000", description: "Kursi nyaman dan kokoh untuk berbagai kebutuhan acara. Dibuat dari bahan berkualitas tinggi untuk ketahanan dan kenyamanan. Desain ergonomis mendukung postur duduk yang baik. Mudah dipindahkan dan disusun untuk fleksibilitas penggunaan. Cocok untuk acara formal maupun informal." },
  { id: 12, images: [produk12], name: "Kamera Vidio HD", price: "30000", description: "Kamera video HD untuk merekam momen berharga dengan jelas. Dilengkapi dengan berbagai fitur canggih untuk hasil video profesional. Desain portabel dan ringan memudahkan penggunaan di berbagai tempat. Baterai tahan lama untuk merekam video dalam durasi panjang. Ideal untuk vlogging, dokumentasi, dan produksi konten." },
  { id: 13, images: [produk13], name: "Panggung Semi Ringing", price: "1500000", description: "Panggung semi ringing untuk acara besar dengan keamanan ekstra. Struktur kokoh dan stabil untuk mendukung berbagai peralatan panggung. Mudah diinstal dan dibongkar sesuai kebutuhan acara. Desain modular memungkinkan konfigurasi yang fleksibel. Cocok untuk konser, pameran, dan acara besar lainnya." },
  { id: 14, images: [produk14], name: "Panggung Full Ringing", price: "2500000", description: "Panggung full ringing dengan kualitas terbaik untuk event spektakuler. Dibuat dari bahan premium untuk daya tahan dan keamanan. Instalasi cepat dan mudah dengan desain modular. Mendukung berbagai jenis acara dengan kebutuhan teknis tinggi. Menawarkan fleksibilitas dan stabilitas maksimal." },
  { id: 15, images: [produk15], name: "Panggung Lipat Portable", price: "1500000", description: "Panggung lipat portable yang mudah dipasang dan dibawa ke mana saja. Ideal untuk acara indoor maupun outdoor dengan mobilitas tinggi. Struktur ringan namun kokoh untuk mendukung berbagai peralatan. Instalasi cepat dan efisien tanpa alat khusus. Cocok untuk konser, presentasi, dan acara komunitas." },
];

const Deskripsi = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  const handleSewaSekarang = () => {
    navigate("/sewaalat");
  };

  return (
    <div className="container mx-auto mt-12 p-12 flex flex-col">
      <button
        className="mx-[5%] w-32 border border-[#1b1a55] text-[#1b1a55] py-2 px-4 rounded hover:bg-[#1b1a55] hover:text-white duration-300 flex items-center justify-center"
        onClick={() => navigate('/fitur')}
      >
        <IoArrowBack className="mr-2" />
        Kembali
      </button>

      <div className="container mx-auto mb-12 py-12 flex">
        <div className="mx-[5%] px-8 w-1/2 pr-6">
          <Carousel showThumbs={false} showStatus={false} className="bg-[#252525] rounded-lg p-4">
            {product.images.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={image} alt={`${product.name} ${index + 1}`} className="rounded-lg" />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="w-1/2 pl-6">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">Rp. {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} / hari</p>
          <p className="text-base mb-4 text-justify">{product.description}</p>
          <button
            className="bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300"
            onClick={handleSewaSekarang}
          >
            Sewa Sekarang
          </button>
        </div>
      </div>

      <section className="reviews mx-[5%] px-8">
        <h2 className="text-2xl font-bold mb-4">Semua Ulasan (461)</h2>
        <button className="write-review bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300 mb-4">
          Tambahkan Ulasan
        </button>
        <div className="review-list grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="review p-4 border rounded shadow-md border-[#9290c3]">
            <h3 className="text-xl font-bold">Sindi</h3>
            <p className="text-lg">5 ★★★★★</p>
            <p>Hasil kamera ini luar biasa dengan harga terjangkau...</p>
            <p>Diposting pada 16 Agustus 2023</p>
          </div>
          <div className="review p-4 border rounded shadow-md border-[#9290c3]">
            <h3 className="text-xl font-bold">Adrian Wahyu</h3>
            <p className="text-lg">5 ★★★★★</p>
            <p>Pengalaman saya menggunakan kamera ini sangat memuaskan...</p>
            <p>Diposting pada 15 Agustus 2023</p>
          </div>
          <div className="review p-4 border rounded shadow-md border-[#9290c3]">
            <h3 className="text-xl font-bold">Ikhsan</h3>
            <p className="text-lg">5 ★★★★★</p>
            <p>Kamera ini menawarkan performa yang sangat baik...</p>
            <p>Diposting pada 15 Agustus 2023</p>
          </div>
          <div className="review p-4 border rounded shadow-md border-[#9290c3]">
            <h3 className="text-xl font-bold">Darto</h3>
            <p className="text-lg">5 ★★★★★</p>
            <p>Setelah menggunakan kamera ini, saya sangat terkesan...</p>
            <p>Diposting pada 15 Agustus 2023</p>
          </div>
        </div>
      </section>

      <section className="related-products mt-12 mx-[5%] px-8">
        <h2 className="text-2xl font-bold mb-4">Produk Terkait</h2>
        <div className="related-product-list grid grid-cols-1 md:grid-cols-3 gap-4">
          {productData
            .filter((item) => item.id !== parseInt(id)) // Exclude current product
            .slice(0, 3) // Limit to 3 related products
            .map((relatedProduct) => (
              <Link
                to={`/deskripsi/${relatedProduct.id}`}
                key={relatedProduct.id}
                className="related-product p-4 border rounded shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={relatedProduct.images[0]}
                  alt={relatedProduct.name}
                  className="mb-4 rounded-lg"
                />
                <p className="text-lg font-bold mb-2">{relatedProduct.name}</p>
                <p className="text-lg font-bold">
                  Rp. {relatedProduct.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} / hari
                </p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Deskripsi;