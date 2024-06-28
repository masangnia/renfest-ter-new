import React, { useState } from "react";

const SewaAlat = () => {
  const [tanggalMulai, setTanggalMulai] = useState("");
  const [tanggalAkhir, setTanggalAkhir] = useState("");

  const handleTanggalMulaiChange = (e) => {
    setTanggalMulai(e.target.value);
  };

  const handleTanggalAkhirChange = (e) => {
    setTanggalAkhir(e.target.value);
  };

  const hitungDurasi = () => {
    const mulai = new Date(tanggalMulai);
    const akhir = new Date(tanggalAkhir);
    const diffTime = Math.abs(akhir - mulai);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const redirectToWhatsApp = () => {
    const nama = document.querySelector('input[placeholder="Nama"]').value;
    const nomorTelepon = document.querySelector('input[placeholder="Nomor telepon"]').value;
    const alamat = document.querySelector('input[placeholder="Alamat"]').value;
    const asalInstansi = document.querySelector('input[placeholder="Asal Instansi"]').value;

    const pesan = `Saya ingin menyewa alat dengan detail sebagai berikut:\n\nNama: ${nama}\nNomor Telepon: ${nomorTelepon}\nAlamat: ${alamat}\nAsal Instansi: ${asalInstansi}\nDurasi: ${hitungDurasi()} hari\nTotal Pembayaran: Rp. ${50000 * hitungDurasi()}`;

    const waLink = `https://wa.me/6285762634822?text=${encodeURIComponent(pesan)}`;
    window.open(waLink, "_blank");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <main className="max-w-6xl mx-auto mt-8">
        <div className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Informasi Pribadi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama"
                  className="p-4 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Nomor telepon"
                  className="p-4 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Alamat"
                  className="p-4 border rounded-lg col-span-2"
                />
                <input
                  type="text"
                  placeholder="Asal Instansi"
                  className="p-4 border rounded-lg col-span-2"
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Informasi Rental</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-2">Lokasi Mulai</label>
                    <select className="p-4 border rounded-lg w-full">
                      <option value="">Pilih Lokasi Mulai</option>
                      <option value="jakarta">Jakarta</option>
                      <option value="bandung">Bandung</option>
                      <option value="surabaya">Surabaya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">Tanggal Mulai</label>
                    <input
                      type="date"
                      className="p-4 border rounded-lg w-full"
                      onChange={handleTanggalMulaiChange}
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Waktu Mulai</label>
                    <input
                      type="time"
                      className="p-4 border rounded-lg w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-2">Lokasi Akhir</label>
                    <select className="p-4 border rounded-lg w-full">
                      <option value="">Pilih Lokasi Akhir</option>
                      <option value="jakarta">Jakarta</option>
                      <option value="bandung">Bandung</option>
                      <option value="surabaya">Surabaya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">Tanggal Akhir</label>
                    <input
                      type="date"
                      className="p-4 border rounded-lg w-full"
                      onChange={handleTanggalAkhirChange}
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Waktu Akhir</label>
                    <input
                      type="time"
                      className="p-4 border rounded-lg w-full"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Konfirmasi</h2>
              <section className="bg-gray-100 p-4 rounded-lg shadow mb-6">
                <h3 className="text-xl font-bold mb-4">
                  Konfirmasi pesanan Anda
                </h3>
                <div className="mb-4">
                  <input type="checkbox" className="mr-2" />
                  <span>
                    Saya akan bertanggung jawab penuh terhadap alat yang saya
                    sewa
                  </span>
                </div>
                <div className="mb-4">
                  <input type="checkbox" className="mr-2" />
                  <span>
                    Saya setuju dengan syarat dan ketentuan yang berlaku
                  </span>
                </div>
                <button
                  className="bg-[#1b1a55] text-white py-2 px-4 rounded hover:bg-[#9290c3] duration-300"
                  onClick={redirectToWhatsApp}
                >
                  Sewa Sekarang
                </button>
              </section>
              <p className="text-gray-600 mt-4">
                Semua data anda aman. Kami menggunakan keamanan tercanggih untuk
                memberikan Anda pengalaman terbaik.
              </p>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Sewa Alat</h3>
              <div className="flex items-center mb-4">
                <div className="w-24 h-24 bg-gray-300 rounded-lg mr-4"></div>
                <div>
                  <h4 className="font-bold">Nama Alat</h4>
                </div>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>Rp. 100.000</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Durasi</span>
                  <span>{hitungDurasi()} hari</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-4">
                <span>Total</span>
                <span>Rp. {50000 * hitungDurasi()}</span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SewaAlat;
