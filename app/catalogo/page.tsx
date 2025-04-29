"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/data/products";
import Image from "next/image";
import AddIcon from '@mui/icons-material/Add';
import { Badge, IconButton } from '@mui/material';
import { useCart } from '../context/CartContext';
import { Notification } from '../components/Notification';

export default function Catalogo() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart, getProductQuantity } = useCart();
  const router = useRouter();
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
  } | null>(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductClick = (productId: string) => {
    router.push(`/producto/${productId}`);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    if (product.stock <= 0) {
      setNotification({
        message: 'Este producto está agotado.',
        type: 'error',
      });
      return;
    }

    // Obtener la cantidad actual en el carrito
    const currentQuantity = getProductQuantity(product.id);
    
    // Verificar si al agregar 1 más superaría el stock
    if (currentQuantity >= product.stock) {
      setNotification({
        message: `Límite de stock alcanzado (${product.stock} unidades)`,
        type: 'warning',
      });
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      stock: product.stock,
      quantity: 1,
    });

    setNotification({
      message: `"${product.name}" añadido al carrito`,
      type: 'success',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-3">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className="group bg-[var(--color-card)] border border-[--color-border] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:text-pink-600 transition transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="relative w-full aspect-square bg-[var(--color-card)]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-t-2xl shadow-sm"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-normal text-[var(--color-text)] group-hover:text-pink-600 text-left">
                {product.name}
              </h2>
              <div className="flex items-center justify-between gap-2">
                <span>$ {product.price.toLocaleString()}</span>
                {product.stock <= 0 ? (<span className="text-red-500 text-md flex items-center h-[40px]">Agotado</span>) : (
                  <IconButton 
                  onClick={(e) => handleAddToCart(e, product)}
                  sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                  >
                    <Badge badgeContent={getProductQuantity(product.id)} invisible={getProductQuantity(product.id) == 0}>
                      <AddIcon />
                    </Badge>
                  </IconButton>
                )}
              </div>
            </div>
          </div>
        ))}
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </div>
    </div>
  );
}