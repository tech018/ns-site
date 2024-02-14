/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_API_URL: process.env.NEXT_BACKEND_API,
  },
};

export default nextConfig;
