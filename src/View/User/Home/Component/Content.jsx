import React from 'react';
import kitchenProducts from '../../../../Model/Service/Categories';

import ProductContent from './Product';
import formatRupiah from '../../../../Helpers/Utils/Formating';

const getRandomImageURL = () => {
  const randomId = Math.floor(Math.random() * 11) + 20; // Menghasilkan ID acak antara 20 hingga 30
  return `https://picsum.photos/id/${randomId}/200/300`;
};

const KitchenProducts = () => {
  return (
    <div className="text-center p-12  shadow-md border-b-2 bg-gray-200 rounded-full m-12  ">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800 flex">Example Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {kitchenProducts.map((product, index) => (
          <div key={index} className=" p-4 rounded-lg shadow-md bg-white">
            <img
              src={getRandomImageURL()}
              alt={`Gambar ${product.name}`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600">Harga: {formatRupiah(product.price)}</p>
          </div>
        ))}
      </div>
      <ProductContent products={kitchenProducts} title="Produk Baru" />
    </div>
  );
};

export default KitchenProducts;
