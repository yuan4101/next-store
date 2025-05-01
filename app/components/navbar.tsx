'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="text-white flex space-x-6">

        {/* Catalogo */}
        <Link
          href="/catalogo"
          className={`relative group hover:text-[#F7A5C0] transition-colors 
            ${pathName === '/catalogo' ? 'text-[#F7A5C0]' : ''}`}
        >
          Catálogo
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-[#F7A5C0] transition-all duration-300 
                ${pathName === '/catalogo' ? 'w-full' : 'w-0 group-hover:w-full'}`}
          ></span>
        </Link>

        {/* Nosotros */}
        <Link
          href="/nosotros"
          className={`relative group hover:text-[#F7A5C0] transition-colors ${
            pathName === '/nosotros' ? 'text-[#F7A5C0]' : ''
          }`}
        >
          Acerca de nosotros
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-[#F7A5C0] transition-all duration-300 ${
              pathName === '/nosotros' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          ></span>
        </Link>
    </div>
  );
}