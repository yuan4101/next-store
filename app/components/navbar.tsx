'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="flex space-x-6">

        {/* Catalogo */}
        <Link
          href="/catalogo"
          className={`relative group text-gray-900 hover:text-pink-600 transition-colors 
            ${pathName === '/catalogo' ? 'text-pink-600' : ''}`}
        >
          Catálogo
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-pink-600 transition-all duration-300 
                ${pathName === '/catalogo' ? 'w-full' : 'w-0 group-hover:w-full'}`}
          ></span>
        </Link>

        {/* Nosotros */}
        <Link
          href="/nosotros"
          className={`relative group text-[var(--color-text)] hover:text-pink-600 transition-colors ${
            pathName === '/nosotros' ? 'text-pink-600' : ''
          }`}
        >
          Acerca de nosotros
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-pink-600 transition-all duration-300 ${
              pathName === '/nosotros' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          ></span>
        </Link>
    </div>
  );
}