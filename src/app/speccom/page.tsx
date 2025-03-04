import React from "react";
import Image from "next/image";
import Component from "../component/page";
import i9 from "../image/i9.jpg";
import i5 from "../image/i5.jpg";
import i3 from "../image/i3.jpg";
import AMD5 from "../image/AMD5.jpg";


const products = [
  {
    name: "Intel Core i9-1400K & Zotac GeForce RTX 4060 Ti AMP",
    price: 79999,
    image: i9, 
  },
  {
    name: "Intel Core i5-13400F & MSI GeForce RTX 4060 Ventus 2X",
    price: 71509,
    image: i5,
  },
  {
    name: "AMD Ryzen 5 4600G",
    price: 10490,
    image: i3,
  },
  {
    name: "Intel Core i3-12100F & GALAX GTX 1650 EX PLUS",
    price: 15999,
    image: AMD5,

  },
];

export default function ProductList() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Recommend SPEC</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-xl">
            <Image
              src={product.image} width={100} height={100}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
            <p className="text-red-500 text-xl font-bold">฿{product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
</div>
);
}