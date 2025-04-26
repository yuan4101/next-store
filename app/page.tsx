"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "../data/books";
import Image from "next/image";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shadow-xl rounded-2xl border border-gray-200 bg-neutral-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="bg-purple-50 border-4 border-pink-200 rounded-2xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="relative w-full max-h-105 lg:max-h-73 aspect-[9/16] bg-pink-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-pink-700 text-center">
                {product.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
