import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ibb.co.com",
        pathname: "/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "res.cloudinary.com",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "dev-to-uploads.s3.amazonaws.com",
      //   pathname: "/**",
      // },
    ],
  },
};

export default nextConfig;
