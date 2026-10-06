/** @type {import('next').NextConfig} */
const restaurantDemoUrl =
  process.env.NEXT_PUBLIC_RESTAURANT_DEMO_URL ??
  "https://arashwebstudio-restaurant.vercel.app";
const clinicDemoUrl = (
  process.env.NEXT_PUBLIC_CLINIC_DEMO_URL ??
  "https://arashwebstudio-clinic.vercel.app"
).replace(/\/$/, "");

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/restaurant-demo",
        destination: restaurantDemoUrl,
        permanent: false,
      },
      {
        source: "/clinic-demo",
        destination: "/clinic",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/clinic",
        destination: `${clinicDemoUrl}/clinic/`,
      },
      {
        source: "/clinic/:path*",
        destination: `${clinicDemoUrl}/clinic/:path*`,
      },
    ];
  },
};

export default nextConfig;
