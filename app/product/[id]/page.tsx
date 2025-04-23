import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

type Props = {
  params: {id: string;};
};

export default async function ProductPage({ params }: Props) {
  const { id } = params;

  if (!id) {
    return <NotFoundMessage />;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <NotFoundMessage />;
  }

  const products: Product[] = await res.json();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <NotFoundMessage />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start p-6 max-w-5xl mx-auto">
      <div className="w-full md:max-w-md mx-auto md:mx-0 aspect-[9/16] max-h-140 border-4 border-pink-200 rounded-xl overflow-hidden shadow-md bg-white relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center w-full p-4 sm:p-6 md:p-6 bg-white rounded-xl shadow-md border border-gray-100">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">{product.name}</h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="/"
            className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition"
          >
            ← Volver al catálogo
          </Link>
          <a
            href={product.download}
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Descargar libro EPUB
          </a>
        </div>
      </div>
    </div>
  );
}

// Componente para mensaje de no encontrado
function NotFoundMessage() {
  return <p className="p-6">Producto no encontrado.</p>;
}
