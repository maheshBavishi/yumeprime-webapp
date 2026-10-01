/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/account-types',
        destination: '/account-type',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

