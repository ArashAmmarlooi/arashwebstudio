/** @type {import('next').NextConfig} */
const DEFAULT_RESTAURANT_ORIGIN = "https://arashwebstudio-restaurant.vercel.app";
const DEFAULT_CLINIC_ORIGIN = "https://arashwebstudio-clinic.vercel.app";

function proxyOrigin(rawValue, defaultOrigin) {
  const fallback = defaultOrigin.replace(/\/$/, "");
  if (!rawValue) return fallback;

  try {
    const url = new URL(rawValue.replace(/\/$/, ""));
    const host = url.hostname.toLowerCase();
    if (host === "arashwebstudio.com" || host === "www.arashwebstudio.com") {
      return fallback;
    }
    return `${url.protocol}//${url.host}`;
  } catch {
    return fallback;
  }
}

const restaurantDemoUrl = proxyOrigin(
  process.env.RESTAURANT_DEMO_ORIGIN ??
    process.env.NEXT_PUBLIC_RESTAURANT_DEMO_URL,
  DEFAULT_RESTAURANT_ORIGIN,
);
const clinicDemoUrl = proxyOrigin(
  process.env.CLINIC_DEMO_ORIGIN ?? process.env.NEXT_PUBLIC_CLINIC_DEMO_URL,
  DEFAULT_CLINIC_ORIGIN,
);

const nextConfig = {
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: "/clinic-demo",
        destination: "/clinic/",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/restaurant-demo",
        destination: `${restaurantDemoUrl}/restaurant-demo`,
      },
      {
        source: "/restaurant-demo/",
        destination: `${restaurantDemoUrl}/restaurant-demo`,
      },
      {
        source: "/restaurant-demo/:path*",
        destination: `${restaurantDemoUrl}/restaurant-demo/:path*`,
      },
      {
        source: "/clinic",
        destination: `${clinicDemoUrl}/clinic/`,
      },
      {
        source: "/clinic/",
        destination: `${clinicDemoUrl}/clinic/`,
      },
      {
        source: "/clinic/:path+",
        destination: `${clinicDemoUrl}/clinic/:path*`,
      },
    ];
  },
};

export default nextConfig;
