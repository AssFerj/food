/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['jornadajs-food.s3.amazonaws.com'],
        unoptimized: true,
    }
};

export default nextConfig;
