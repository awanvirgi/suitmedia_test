/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "suitmedia-backend.suitdev.com"
            },
            {
                protocol: 'https',
                hostname:"assets.suitdev.com"
            }
        ]
    },
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: '/api/ideas/:path*',
                destination: 'https://suitmedia-backend.suitdev.com/api/ideas/:path*',
            },
        ];
    },
};

export default nextConfig;
