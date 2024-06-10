/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com", // unsplash.com의 서브도메인을 허용
        
      },
    ],
  },
};

export default nextConfig;
