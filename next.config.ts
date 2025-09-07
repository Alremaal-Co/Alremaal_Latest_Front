import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: !false,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://192.168.8.123:7000/api/:path*',
  //     },
  //   ]
  // },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }
    return config;
  },
};

export default withNextIntl(nextConfig);







// import type { NextConfig } from "next";
// import createNextIntlPlugin from 'next-intl/plugin';
 
// const withNextIntl = createNextIntlPlugin();
// // console.log("API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [{ protocol: 'https', hostname: '**' }],
//   },
//   // images: {
//   //   remotePatterns: [{ protocol: 'https', hostname: 'uploads.dealapp.sa' }],
//   // },

//   // images: {
//   //   domains: ['uploads.dealapp.sa'],
//   // },
//   env: {
//     NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
//     NEXT_PUBLIC_API_BASE_URL2: process.env.NEXT_PUBLIC_API_BASE_URL2,
//     NEXT_PUBLIC_API_BASE8000_URL: process.env.NEXT_PUBLIC_API_BASE8000_URL,
//     NEXT_PUBLIC_GOOGLE_MAPS_API_LAYERS: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_LAYERS,
//     NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
//     NEXT_PUBLIC_LANG: process.env.NEXT_PUBLIC_LANG,
//     NEXT_PUBLIC_TIMEOUT: process.env.NEXT_PUBLIC_TIMEOUT,
//     NEXT_PUBLIC_MAX_RETRIES: process.env.NEXT_PUBLIC_MAX_RETRIES,
//     NEXT_PUBLIC_RETRY_DELAY: process.env.NEXT_PUBLIC_RETRY_DELAY,
//   },


//     async rewrites() {
//       return [
//         {
//           source: '/_svc/:path*',
//           destination: 'http://192.168.12.25:5051/_svc/:path*',
//         },
//       ]
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback = {
//         fs: false,
//         module: false,
//       };
//     }

//     return config;
//   },
// };

// export default withNextIntl(nextConfig);












// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
