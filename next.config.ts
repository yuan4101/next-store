import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/api/:path*", // Aplica a todas las rutas API
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://tudominio.vercel.app", // Reemplaza con tu URL en Vercel
          },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,POST" },
        ],
      },
    ];
  },
};

export default nextConfig;
