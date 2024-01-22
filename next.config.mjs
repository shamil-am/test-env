/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TEST_VAR: process.env.TEST_VAR,
  },
};

export default nextConfig;
