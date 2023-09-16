/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images.unoptimized = true,
  images: {
    domains: ["themealdb.com", "www.themealdb.com", "xvpc.github.io", "www.xvpc.github.io"],
    unoptimized: true,
  }
}

module.exports = nextConfig
