// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Masque le bouton « N » de Next.js en développement (il n'existe jamais en production)
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig;