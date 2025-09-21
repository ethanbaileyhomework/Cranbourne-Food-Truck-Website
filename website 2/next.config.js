/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ["placehold.co", "images.unsplash.com", "res.cloudinary.com"]
  }
};

export default nextConfig;