import React from 'react';

import formatRupiah from '../../../../Helpers/Formating';

const getRandomImageURL = () => {
  const randomId = Math.floor(Math.random() * 11) + 20; 
  return `https://picsum.photos/id/${randomId}/200/300`;
};

const ProductContent = ({ products, title }) => {
  return (
    <div className="text-center p-12 ">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
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
    </div>
  );
};

export default ProductContent;
