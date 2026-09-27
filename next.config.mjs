/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/restaurant-demo",
        destination: "https://arashwebstudio-restaurant.vercel.app",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
