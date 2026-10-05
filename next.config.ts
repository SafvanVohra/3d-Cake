import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the little "N" dev badge so it never shows up in a recording.
  devIndicators: false,
  images: { unoptimized: true },
  allowedDevOrigins: ["192.168.1.6", "192.168.1.6:3005", "localhost:3005", "192.168.*"],
};

export default nextConfig;
