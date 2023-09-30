import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white py-4 p-12 w-screen" >
      <div className="container mx-auto flex flex-col md:flex-row justify-between h-full mt-32 mb-20">
        <div className="md:w-1/2 flex flex-col justify-end">
          <div className="mb-auto">
            <p className="text-2xl font-bold text-black">GET</p>
            <p className="text-black">Layanan Perawatan Pelanggan</p>
            <p className="text-black">0836636</p>
            <p className="text-black">
              Senin - Minggu dari 09:00 - 22:00
            </p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-end md:flex-row md:justify-between mr-40">
          <div className="mr-12">
            <h4 className="text-lg font-bold text-black">
              Informasi Untuk Pembeli
            </h4>
            <ul className="mt-2">
              <li className="text-black">Pengiriman</li>
              <li className="text-black">Perakitan</li>
              <li className="text-black">Tentang Kami</li>
              <li className="text-black">Kontak</li>
            </ul>
          </div>
        </div>
      </div>
     
      <div className="">
        <div className="border-t border-white py-4 text-center">
          <div className="flex justify-between">
            <div className="">
              <p className="text-black">Dapatkan 2023</p>
            </div>
            <div className="">
              <p className="text-black">Kebijakan Privasi</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
