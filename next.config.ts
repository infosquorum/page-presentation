//next.config.ts-P2
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⚠️ Ignore les erreurs ESLint pendant le build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⚠️ Ignore les erreurs TypeScript pendant le build (pas recommandé)
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
